export  const getExplore = async ()=>{
try{
    const res=    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
const exploreDate = await res.json();
return exploreDate;
}catch(error){
    console.log(error)
}
}