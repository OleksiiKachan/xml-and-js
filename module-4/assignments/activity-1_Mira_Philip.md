# Activity 1

Generate folowing XPath queries for `module-4/products.xml` file

1. Target 2nd product in the list

`//product[2]`

![image info](../assets/q1.png)

2. Target last product in the list

`(//product)[last()]`

![image info](../assets/q2.png)

3. Target `sku` attribute of the first product

`//product[1]/@sku`

![image info](../assets/q3.png)

4. Target all products with manufacturer id `sjb-pet`

`//manufacturer[@id="sjb-pet"]/..`

![image info](../assets/q4.png)