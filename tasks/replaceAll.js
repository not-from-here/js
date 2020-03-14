const replaceAll = (str,searchValue,replaceValue,one=false) => {
    const regex =(one)?new RegExp( `${searchValue}+` , "g"):new RegExp( `${searchValue}` , "g");
    return str.replace(regex, replaceValue);
};

replaceAll('This Is Spinal Tap',' ','-');
replaceAll("   this   IsSpinal     Tap     ",' ','-');
replaceAll("   this   IsSpinal     Tap     ",' ','-',true);
replaceAll("The_Andy_Griffith_Show",'_','-');
replaceAll("The_Andy__Griffith_Show",'_','-',true);