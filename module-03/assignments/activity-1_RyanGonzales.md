# Activity 1

```xml
<list:employeeList 
xmlns:list="urn:corp:list"
xmlns:emp="urn:corp:emp"
xmlns:dept="urn:corp:dep">
  <list:personList>
    <emp:empID>E0000001</emp:empID>
    <dept:name>Sales</dept:name>
    <emp:name >John Smith</dept:name>
  </list:personList>
  <personList:personList>
    <emp:empID>E0000002</emp:empID>
    <dept:name>Development</dept:name>
    <emp:name>Ichiro Tanaka</emp:name>
  </list:personList>
  <list:personList>
    <emp:empID>E0000003</emp:empID>
    <dept:name>Development</dept:name>
    <emp:name >Jiro Suzuki</emp:name>
  </list:personList>
  <list:personList>
    <emp:empID>E0000004</emp:empID>
    <dept:name >Administrative</dept:name>
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
