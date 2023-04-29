the repo is used to reproduce an error "SystemError [ERR_SYSTEM_ERROR]: A system error occurred: uv_os_get_passwd returned ENOENT (no such file or directory)" that could occur when there is no /etc/passwd entry for the current user, such as in some Docker and GitHub Action setups.

Run the command below to reproduce the issue:
`docker-compose up test`