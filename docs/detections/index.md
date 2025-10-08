---
title: Detections & Dashboards
---

# Detections & Dashboards

This section documents custom rules and visualizations. Each item includes the **ATT&CK technique**, **signal logic**, and **validation evidence**.

## Example – Suspicious PowerShell (T1059.001)

**KQL (Elastic):**
```kql
index = "logs-windows.*" and process.name : "powershell.exe" and process.args : ("-enc" or "EncodedCommand" or "FromBase64String")
```

**Why it works:** Encoded commands and Base64 patterns are common in obfuscated PS attacks.  
**Validation:** Ran `powershell -enc <payload>` on Workstation; alert fired and triaged.

## Example – Web Shell Write in DVWA (T1505.003)

**Suricata rule (DMZ inline)**:
```suricata
alert http any any -> $DMZ_WEB any (msg:"WEB: Possible PHP webshell upload"; flow:to_server,established; http.uri; content:".php"; nocase; http.request_body; content:"<?php"; within:200; classtype:web-application-attack; sid:900001; rev:1;)
```

**Dashboard:** *DMZ Inbound* – top src IP/ASN, URIs, HTTP methods, status codes, IPS drops vs IDS alerts.

_Add more items for credential access, lateral movement, persistence, discovery, exfiltration…_