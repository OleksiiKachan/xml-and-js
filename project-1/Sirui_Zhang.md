Contribute in this project:
1.convert bank.json file into bank.xml file.
    use branch, clients, and cards to seperate the data into three main subject.
2.create bank.css file for banks.html file style usage.
    add border of the table and make it look better.
3.create banks.html file based on the bank.xml file.
    use <li> to list banks branch list, and use table under the bank inforamtion to display clients and cards in this case. Since table can show the clients and cards data neat and clear.
    For the clients and cards data, not able to just get all of them via getElementsByTagName under branch loop, it will only able to display the first client and card data since there is no loop for the system to keep printing out the rest of them.
    So I  create const parseClients and parseCards, and use 
                for(let i = 0; i < Nodes.length; i++ ){
                    const Node = Nodes[i];
    to let system able ot get the data with the correct quantity of the childNode whcih under the main element branch.
    and use nodes.push(nodeObject) to add a new NodeObject to the end of the Nodes array during the loop.
    
    And becuase of the same reason, I create another const createClients to let the system able to display and do the loop for the clients and cards as well. And create table under the createClients. And since it's not able to just print out the data like what xsl do, need to create element for each elements. and use `td` to let them fit into the table as the cell; use method appenchild to add the new text node as a child of the element; use createtextnode to create a new text node with the specified text ,and let the system able to print the text of data out. 
    And carete and element with `tr` to make the previous td element able to be added into the table as what data will print out for each row.
    And since there are two cards for each clients, so I use i+1 for the second card data, then the system will able to print the second card data out under the loop of clients. And make the table as a div with its title after creating the table.
    And for the display data, let the system get clients and cards under the loop of bank branch. Use following code: 
            const bank = banks[index];
            const clients = bank.getElementsByTagName('clients');
            const cards = bank.getElementsByTagName('cards');
    Then all clients and cards can be got under the loop instead of just the firstchild.
