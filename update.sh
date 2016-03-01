#!bin/bash
SCRIPT="ps -aux | grep 'unicorn master' | awk '{print $2}' | xargs kill"
ssh root@104.131.13.122 "${SCRIPT}";

cap production deploy;
