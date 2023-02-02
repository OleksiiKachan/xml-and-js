# Activity - 1
### Name: Naitik Mukeshkumar Panchal
### N-No: N01512962

1. Target 2nd product in the list
* `//product[2]`
* [activity-1-Q1](/module-04/assets/activity1-1.png)

2. Target last product in the list
* `//product[last()]`
* [activity-1-Q2](/module-04/assets/activity1-2.png)

3. Target `sku` attribute of the first product
* `//product[1]/@sku`
* [activity-1-Q3](/module-04/assets/activity1-3.png)

4. Target all products with manufacturer id `sjb-pet`
* Doing this one way:  ` //manufacturer[@id='sjb-pet']/.. `
* [activity-1-Q4(1)](/module-04/assets/activity1-4.png)

* Way 2: ` /products/product[manufacturer[@id='sjb-pet']]`
* [activity-1-Q4(2)](/module-04/assets/activity1-4(2).png)
