import apple from "../assets/badge.png"
import tick from "../assets/tick.png"
function Send() {
  const text = [
    { text: "Malesuada Ipsum" },
    { text: "Vestibulum" },
    { text: "Parturient Lorem" },
  ];

  const products = [
    {
     item : 'Apple',
     product : "Macbook",
     price : "-999€"
    },
    {
      item : 'Amazon',
      product : "Electronics",
      price : "-49€"
     },
     {
      item : 'Twitter',
      product : "Ads",
      price : "-29€"
     },
     {
      item : 'Microsoft',
      product : "Office Suite",
      price : "-149€"
     },
     {
      item : 'Dropbox',
      product : "cloud",
      price : "-14€"
     },
     {
      item : 'Paypal',
      product : "Macbook",
      price : "-200€"
     }
  ]

  return (
    <div className="bg-[#E8F2EE] flex flex-col px-3  md:flex-row  px-3 sm:px-[100px] xl:px-[150px]  xl:max-h-[500px]  gap-5 md:gap-0 justify-between  overflow-hidden">
      <div className="flex flex-col gap-10 md:gap-5 xl:gap-10 w-full  md:w-[38%] py-2 md:py-[70px]   ">
        <span className=" leading-none font-medium text-2xl sm:text-3xl md:text-5xl tracking-tight">
          Send & receive <br />
          money instantly
        </span>
        <span className=" text-sm font-interSemi md:leading-8 xl:leading-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </span>
        <div className="flex flex-col gap-5 ">
          {text.map((item, i) => (
            <div className="flex gap-5 items-center" key={i}>
              <img className="w-[30px] h-[30px]" src={tick} alt="" />
              <span className="font-interSemi text-sm">{item?.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[50px] flex flex-col gap-4 ">
        {products?.map((item, i) => (
       <div className="bg-[white] h-[83px] lg:w-[300px] xl:w-[400px] rounded-[10px] flex justify-between p-4"  key={i}>
        <div className=" w-[70%] md:w-[40%]  flex gap-4  ">
            <img className="w-[50px] h-[50px]" src={apple} alt="apple" />
        <div className="flex flex-col  w-full font-Dm">
         <span className="font-semibold text-[18px]">{item?.item}</span>
         <span className="text-[16px] opacity-50 text-nowrap">{item?.product}</span>
        </div>
        </div>
        <div className=" flex items-center text-[18px] font-Dm font-semibold">
        {item?.price}
        </div>
         </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Send;
