
worker_processes 4
user "root"
working_directory "/var/www/appleJuiceScholars/current" # available in 0.94.0+

listen "/tmp/.sock", :backlog => 64
listen 80, :tcp_nopush => true

timeout 30

# feel free to point this anywhere accessible on the filesystem
pid "/var/www/appleJuiceScholars/current/tmp/pids/unicorn.pid"

stderr_path "/var/unicorn.stderr.log"
stdout_path "/var/unicorn.stdout.log"

# combine REE with "preload_app true" for memory savings
# http://rubyenterpriseedition.com/faq.html#adapt_apps_for_cow
preload_app true
GC.respond_to?(:copy_on_write_friendly=) and
  GC.copy_on_write_friendly = true

before_fork do |server, worker|
  # the following is highly recomended for Rails + "preload_app true"
  # as there's no need for the master process to hold a connection
  #defined?(ActiveRecord::Base) and
  #  ActiveRecord::Base.connection.disconnect!

  old_pid = "#{server.config[:pid]}.oldbin"
  if old_pid != server.pid
    begin
      sig = (worker.nr + 1) >= server.worker_processes ? :QUIT : :TTOU
      Process.kill(sig, File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
    end
  end
end

after_fork do |server, worker|
  # the following is *required* for Rails + "preload_app true",
  #defined?(ActiveRecord::Base) and
  #  ActiveRecord::Base.establish_connection
end
