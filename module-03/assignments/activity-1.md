# Activity 1

```xml
<?xml version="1.0" encoding="utf-8"?>
<employeeList  xmlns="urn:corp:list"  xmlns:emp="urn:corp:emp" xmlns:dep="urn:corp:dep">
  <personList>
    <emp:empID>E0000001</emp:empID>
    <dep:name>Sales</dep:name>
    <emp:name>John Smith</emp:name>
  </personList>
  <personList>
    <emp:empID>E0000002</emp:empID>
    <dep:name>Development</dep:name>
    <emp:name>Ichiro Tanaka</emp:name>
  </personList>
  <personList>
    <emp:empID>E0000003</emp:empID>
    <dep:name>Development</dep:name>
    <emp:name>Jiro Suzuki</emp:name>
  </personList>
  <personList>
    <emp:empID>E0000004</emp:empID>
    <dep:name>Administrative</dep:name>
    <emp:name>Saburo Takahashi</emp:name>
  </personList>
</employeeList>
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
