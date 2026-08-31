# N100 UNIQUE ENTITY AUDIT REPORT (V1 DISCOVERY)

**Audit Date**: 2026-08-31  
**Dataset Inspected**: `N100-AUTHORITATIVE-DATASET-V1.csv`  

---

## 1. Entity Uniqueness Audit Findings
- **V1 Row Count**: 100 Rows
- **V1 Unique Domain Count**: 97 Unique Domains
- **V1 Unique Business Entity Count**: 97 Unique Business Entities
- **Duplicate Domains Discovered**:
  1. `superthing.com` (Appeared in Batch 1 AND Batch 5)
  2. `cocokind.com` (Appeared in Batch 3 AND Batch 5)
  3. `coalandcanary.com` (Appeared in Batch 3 AND Batch 5)

---

## 2. Remediation Plan
Remove the 3 duplicate Batch 5 rows and replace them with 3 verified unique North American SMBs that have NEVER appeared anywhere in the study.
