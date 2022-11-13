XML Dosyasına nasıl CSS eklenir????

<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
<!DOCTYPE menuInfo [
      <!ELEMENT menuInfo (title+, summary, effectiveDate+, menu+)>
      <!ELEMENT title (#PCDATA)>
      <!ELEMENT summary (#PCDATA)>
      <!ELEMENT effectiveDate (#PCDATA)>
      <!ELEMENT menu (category, menuItem+)>

      <!ELEMENT category (#PCDATA)>
      <!ELEMENT menuItem (itemName+, description+, price+, indicator*)>

      <!ELEMENT itemName (originalName+, oldName*)>
      <!ELEMENT originalName (#PCDATA)>
      <!ELEMENT oldName (#PCDATA)>

      <!ELEMENT description (#PCDATA)>
      <!ELEMENT price (#PCDATA)>
      <!ELEMENT indicator (#PCDATA)>

]>

<?xml-stylesheet type="text/css" href="style_Aycan_Lizor.css"?>