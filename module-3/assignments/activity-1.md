# Activity 1

```xml
<list:employeeList xmlns:list="urn:corp:list" xmlns:personList="urn:corp:list" xmlns:empID="urn:corp:emp" xmlns:name="urn:corp:dep" xmlns:name="urn:corp:emp">
  <list:personList>
    <emp:empID>E0000001</emp:empID>
    <dep:name>Sales</dep:name>
    <emp:name>John Smith</emp:name>
  </list:personList>
  <list:personList>
    <emp:empID>E0000002</emp:empID>
    <dep:name>Development</dep:name>
    <emp:name>Ichiro Tanaka</emp:name>
  </list:personList>
  <list:personList>
    <emp:empID>E0000003</emp:empID>
    <dep:name>Development</dep:name>
    <emp:name>Jiro Suzuki</emp:name>
  </list:personList>
  <list:personList>
    <emp:empID>E0000004</emp:empID>
    <dep:name>Administrative</dep:name>
    <emp:name>Saburo Takahashi</emp:name>
  </list:personList>
</list:employeeList>
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
