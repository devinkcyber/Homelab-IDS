---
title: Active Directory Incident Response
---

# Active Directory IR Playbooks

## Playbook: Brute Forcing Guest Account (T1110.001)
- **Trigger:** Detection rule *Multiple Failed Login Attempts in Active Directory* fired.
- **Triage:** Pivot by `user.name : Guest`; check for 4624 successes
- **Contain:** Block offending IP/range; ensure Guest is disabled.
- **Eradication/Recovery:** Scan/isolate source host. Enforce deny-logon for Guests

## Playbook: Kerberoast of svc-test (T1558.003 & T1110.002 & T1078.002)
- **Trigger:** Detection rule *TGS Request Not From DC* fired.
- **Triage:** Summarize `event.code : 4769` by src/crypto/SPN.
- **Contain:** Isolate source; rotate svc-test, deny delegation.
- **Eradication/Recovery:** Remove creds/tickets on source

## Playbook: Upload of SharpHound (T1105 & T1047)
- **Trigger:** Detection rule *SharpHound Uploaded* fired.
- **Triage:** Pull parent tree; check WinRM activity.
- **Contain:** Isolate endpoint; kill SharpHound/PS sessions; reset used creds.
- **Eradication/Recovery:** Remove binaries/Zips; restrict/disable WinRM.

## Playbook: DCSync (T1003.006 & T1078.002)
- **Trigger:** Detection rule *Active Directory Replication from Non Machine Account* fired.
- **Triage:** Identify account/host; recent 4672/4728 events
- **Contain:** Disable the account; isolate source; remove replication perms.
- **Eradication/Recovery:** Compromise assessment

## Playbook: Pass-the-hash to Login as Domain Admin (T1550.002 & T1021.006)
- **Trigger:** Detection rule *Admininstrator NTLM Network Login* fired.
- **Triage:** Review 4624 details, map source host legitimacy.
- **Contain:** Rotate DA creds
- **Eradication/Recovery:** Disable built-in DA where possible; alert on DA NTLM Type 3
