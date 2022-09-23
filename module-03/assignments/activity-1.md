# Activity 1

```xml
<ls:employeeList xmlns:ls="urn:corp:list" xmlns:ep="urn:corp:emp" xmlns:dp="urn:corp:dep">
  <ls:personList >
    <ep:empID>E0000001</ep:empID>
    <dp:name>Sales</dp:name>
    <ep:name>John Smith</ep:name>
  </ls:personList>
  <ls:personList>
    <ep:empID>E0000002</ep:empID>
    <dp:name>Development</dp:name>
    <ep:name>Ichiro Tanaka</ep:name>
  </ls:personList>
  <ls:personList>
    <ep:empID>E0000003</ep:empID>
    <dp:name>Development</dp:name>
    <ep:name>Jiro Suzuki</ep:name>
  </ls:personList>
  <ls:personList>
    <ep:empID>E0000004</ep:empID>
    <dp:name>Administrative</dp:name>
    <ep:name>Saburo Takahashi</ep:name>
  </ls:personList>
</ls:employeeList>
```

Resolve naming collision by adding namepsaces

- `employeeList` and `personList` - list schema
- `empId` and second `name` - employee schema
- first `name` - department schema

---

- list schema - urn:corp:list
- employee schema - urn:corp:emp
- department schema - urn:corp:dep

Save file as `module-3/asssignments/activity-1.xml`
