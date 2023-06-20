/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
const NFTs = [] //  to fulfill the requirement asked in the first part

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _age, _gender,_bling) {
    //creating an object for the 2nd part of assessment
    const NFT = {
        "name":_name,
        "age":_age,
        "gender":_gender,
        "bling": _bling
    }
    //now we have to store the values in our array
    NFTs.push(NFT);
    console.log("minted " + _name); // for confirmation that the nft has been pushed

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    //we have used here the most popular and easiest loop that is for loop
    for(let i = 0; i<NFTs.length; i++)
    {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Age: \t\t" + NFTs[i].age);
        console.log("Gender: \t" + NFTs[i].gender);
        console.log("Bling: \t\t" + NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);
}

// call your functions below this line

mintNFT("Sneha", "20", "Female", "silver chain");
mintNFT("Sue", "25", "Male", "silver chain");
mintNFT("Tina", "22", "Female", "silver chain");
mintNFT("Bob", "27", "Male", "silver chain");
listNFTs();
getTotalSupply();