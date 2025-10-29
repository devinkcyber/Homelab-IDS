---
title: Domain Controller
---

# Windows Server 2025 – Domain Controller

## Purpose
Active Directory domain services; realistic enterprise authentication/authorization traffic.

## Specs
- Hostname: `WIN-LLBIAPV2E9D.lab.local`
- IP: `192.168.25.137`
- Roles: AD DS, DNS
- Logging: Sysmon, Windows event forwarding via Elastic Agent
- 16gb of memory

## Build Notes
1. Install Server 2025 → promote to new forest `lab.local`.
2. Create OUs (Workstations, Users, Service Accounts).

## Validation
- Join `Workstation-A.lab.local` to domain:
![1](img/dc/b.png){ loading=lazy }
- Confirm Kerberos/NTLM events in Kibana:
```
event.code: 4624
```
![1](img/dc/a.png){ loading=lazy }

## Install (step-by-step)
<Add AD Users & Computers, GPOs, sample event queries>
![1](img/dc/1.png){ loading=lazy }
![2](img/dc/2.png){ loading=lazy }
![3](img/dc/3.png){ loading=lazy }
![4](img/dc/4.png){ loading=lazy }
![5](img/dc/5.png){ loading=lazy }
![6](img/dc/6.png){ loading=lazy }
![7](img/dc/7.png){ loading=lazy }
![8](img/dc/8.png){ loading=lazy }
![9](img/dc/9.png){ loading=lazy }
![10](img/dc/10.png){ loading=lazy }
![11](img/dc/11.png){ loading=lazy }
![12](img/dc/12.png){ loading=lazy }
![13](img/dc/13.png){ loading=lazy }
![14](img/dc/14.png){ loading=lazy }
![15](img/dc/15.png){ loading=lazy }
![16](img/dc/16.png){ loading=lazy }
![17](img/dc/17.png){ loading=lazy }
![18](img/dc/18.png){ loading=lazy }
![19](img/dc/19.png){ loading=lazy }
![20](img/dc/20.png){ loading=lazy }
![21](img/dc/21.png){ loading=lazy }
![22](img/dc/22.png){ loading=lazy }
![23](img/dc/23.png){ loading=lazy }
![24](img/dc/24.png){ loading=lazy }
