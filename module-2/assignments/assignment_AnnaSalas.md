# Assignment 1

1.Yes,some errors.effectiveDate is written with space,originalName is not written in opening of tag and it is written in lowercase.
2.CDATA is used to make the characters data, it may contain markup characters such as*,%,!.
3.<!Anna Salas,N01517324>
4.Prolog-<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
Document body-<menuInfo> Starts from the root element
Epilog-In this some comments are used.Eg: <!-- heart healthy -->
	Also some processing instruction used for css file.
Processing Instructions- We add css file to this document.
5.Inline DTD
<!DOCTYPE menuInfo [
<!ELEMENT menuInfo (title,summary,effectiveDate,menu+)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT summary (#PCDATA)>
<!ELEMENT effectiveDate (#PCDATA)>
<!ELEMENT menu (category,menuItem+)>
<!ELEMENT category (#PCDATA)>
<!ELEMENT menuItem (description,price,,itemName+)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT price (#PCDATA)>
<!ELEMENT itemName (originalName,oldName*)>
<!ELEMENT originalName (#PCDATA)>
<!ELEMENT oldName (#PCDATA)>
]>
6.Well-formed and valid
7.css file
orginalName{
    font-size: 10px;
}
category{
    display: block;
}
title{
    font-weight: bold;
    font-size: 25px;
}
menuItem{
    background-color: aqua;
}

<!Name: Anna Salas
Student ID: N01517324>