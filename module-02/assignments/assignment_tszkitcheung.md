<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
<!DOCTYPE menuinfo[
    <!ELEMENT menuinfo (title, summary, effective_Date, menu+)>
    <!ELEMENT title (#PCDATA)>
    <!ELEMENT summary (#PCDATA)>
    <!ELEMENT effective_Date (#PCDATA)>
    <!ELEMENT menu (category, menuItem+)>
    <!ELEMENT category (#PCDATA)>
    <!ELEMENT menuItem (itemName, description, price, indicator*)>
    <!ELEMENT itemName (originalName, oldName)>
    <!ELEMENT description (#PCDATA)>
    <!ELEMENT price (#PCDATA)>
    <!ELEMENT indicator (#PCDATA)>
]>
<menuInfo>
  <title>Chester's Breakfast Menu</title>
  <summary>
    <![CDATA[
    If you've been craving an authentic homestyle country breakfast,
    look no further than Chester's!  We've got your breakfast favorites served
    up just the way you like them!!
    ]]>
  </summary>
  <effective_Date>03/12/2016</effective_Date>
  <menu>
    <category>Traditional Favorites</category>
    <menuItem>
      <itemName>
        <originalName> Rise n' Shine</originalName>
        <oldName> Shine </oldName>
      </itemName>
      <description>
        <![CDATA[
        Two Eggs* cooked to order with Grits, Gravy and Homemade Buttermilk
        Biscuits along with real Butter and the best fresh jam
        available. Served with your choice of Fresh Fruit or Hashbrown Casserole
        and Smoked Sausage Patties, Turkey Sausage Patties or Thick-Sliced Bacon.
        ]]>
      </description>
      <price>7.95</price>
    </menuItem>
    <menuItem>
      <itemName>
        <originalName> Fresh Mornin' Sampler </originalname>
        <oldName> Mornin' Sampler </oldName>
      </itemName>
      <description>
        <![CDATA[
        Low-Fat Vanilla Yogurt and Seasonal Fruit topped with our Honey Granola
        mix of Almonds and Dried Fruit. Served with a Wild Maine Blueberry Muffin
        or an Apple Bran Muffin.
        ]]>
      </description>
      <price>6.95</price>
      <indicator>&#9829;</indicator>  <!-- heart healthy -->
      <indicator>&#9830;</indicator>  <!-- low-sodium -->
      <indicator>&#9824;</indicator>  <!-- vegan -->  
    </menuItem>
  </menu>
  <menu>
    <category>Lite and Quick</category>
    <menuItem>
      <itemName>
        <name> Oatmeal Breakfast </originalName>
      </itemName>
      <description>
        <![CDATA[
        Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins,
        Fresh Sliced Bananas or 100% Pure Natural Syrup. Also, served with your
        choice of Apple Bran Muffin or Wild Maine Blueberry Muffin. Available
        all day.
        ]]>
      </description>
      <price>6.95</price>
      <indicator>&#9829;</indicator>  <!-- heart healthy -->
      <indicator>&#9830;</indicator>  <!-- low-sodium -->
      <indicator>&#9824;</indicator>  <!-- vegan -->  
    </menuItem>
    <menuItem>
      <itemName>
        <originalName> Chester's Meat Platter </originalName>
        <oldName> Chester Platter </oldName>
      </itemName>
      <description>
        <![CDATA[
        Country Ham, Pork Chops or Steak* grilled to order, Three Eggs* cooked
        to order served with Cottage Cheese, Smoked Sausage Patties, Turkey
        Sausage Patties or Thick-Sliced Bacon.
        ]]>
      </description>
      <price>12.95</price>
      <indicator>&#9832;</indicator>  <!-- Low-carb -->
    </menuItem>
  </menu>
</menuInfo>
<!-- Tsz Kit Cheung N01555831 -->

1. There is an error in line 11. Elements should not contain any blank spaces. 
Correction:
  <effective_Date>03/12/2016</effective_Date>

2. The use of CDATA block in this document is to treat as character data only.
In this case, the CDATA block is used for describing the breakfast sets and not for data processing

3. comment line to the end of file which contains you name and student id.
<!-- Tsz Kit Cheung N01555831 -->

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?
prolog: <?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
document body: all other parts
epilog:<!-- Tsz Kit Cheung N01555831 -->

Prolog contains meta information about the document rather than document content.
Prolog is optional, so it is not processed
Document body are processing instructions
All the comments(epilog) is not processed

5. Add inline DTD for this document.
<!DOCTYPE menuinfo[
    <!ELEMENT menuinfo (title, summary, effective_Date, menu+)>
    <!ELEMENT title (#PCDATA)>
    <!ELEMENT summary (#PCDATA)>
    <!ELEMENT effective_Date (#PCDATA)>
    <!ELEMENT menu (category, menuItem+)>
    <!ELEMENT category (#PCDATA)>
    <!ELEMENT menuItem (itemName, description, price, indicator*)>
    <!ELEMENT itemName (originalName, oldName)>
    <!ELEMENT description (#PCDATA)>
    <!ELEMENT price (#PCDATA)>
    <!ELEMENT indicator (#PCDATA)>
]>

6. Verify that file is well-formed and valid.


7. Create `style.css` file and link it to the file. Add the following styles to the .css:
- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule