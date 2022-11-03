# Project 1 Alla-Anastasiia Gnatkiv

## Files created:
- stockMarket.xml
- stockMarket.dtd
- stockMarket.html
- stockMarket.css

## Description:
- converted json file stockMarket.json to xml
- created external dtd for created stockMarket.xml
- created html file fore stockMarket.xml
    + created XMLHttpRequest()
    + when XMLHttpRequest() is ready then all data from xml is retrieved (by displayData() function) in form of divs with different html elements inside
    + in displayData() I retrived data about 'id', 'name', and 'currency' by loop for each 'row'. Data about 'address', 'stocks', and 'accounts' was retrieved by additional functions - 
    displayAddressTable() for 'address',
    displayStocksTable() for 'stocks',
    displayHolderTable() for 'holder' in 'accounts',
    displayBankTable() for 'bank' in 'accounts'.
    + mentioned above functions use loops for retriving data(a set of addresses/stocks/accounts) for each row.
- created css file for stockMarket.html.
