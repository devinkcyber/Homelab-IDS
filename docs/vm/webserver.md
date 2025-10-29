---
title: Webserver (DVWA)
---

# Ubuntu – Webserver (DVWA)

## Purpose
Intentionally vulnerable web app.

## Specs
- IP: `192.168.26.10`
- Services: Nginx/Apache, PHP/MySQL, DVWA
- Security: Minimal hardening
- Logging: Event forwarding via Elastic Agent
- 8gb of memory

## Build Notes
1. Install Ubuntu Server → static IP `192.168.26.10`.
2. Install DVWA stack (web/PHP/MySQL), set DVWA security level to *low* for testing.
3. Elastic Agent enrolled; ship nginx/apache, auth, and system logs to Fleet.
4. Expose via firewall NAT: WAN → 80/443 → `192.168.26.10`.

## Validation
- Confirm Kibana logs:
```
user.name : webadmin
```
![10](img/webserver/a.png){ loading=lazy }
- Confirm DVWA is up and running: Go to http://192.168.25.142/DVWA
![13](img/webserver/13.png){ loading=lazy }

## Install (step-by-step)
<Add NAT/port‑forward rule, DVWA login, alerts>
![1](img/webserver/1.png){ loading=lazy }
![2](img/webserver/2.png){ loading=lazy }
![3](img/webserver/3.png){ loading=lazy }
![4](img/webserver/4.png){ loading=lazy }
![5](img/webserver/5.png){ loading=lazy }
![6](img/webserver/6.png){ loading=lazy }
![7](img/webserver/7.png){ loading=lazy }
![8](img/webserver/8.png){ loading=lazy }
![9](img/webserver/9.png){ loading=lazy }
![10](img/webserver/10.png){ loading=lazy }
![11](img/webserver/11.png){ loading=lazy }
![12](img/webserver/12.png){ loading=lazy }
![13](img/webserver/13.png){ loading=lazy }
![14](img/webserver/14.png){ loading=lazy }
![15](img/webserver/15.png){ loading=lazy }
![16](img/webserver/16.png){ loading=lazy }
![20](img/webserver/20.png){ loading=lazy }
![21](img/webserver/21.png){ loading=lazy }
![22](img/webserver/22.png){ loading=lazy }
