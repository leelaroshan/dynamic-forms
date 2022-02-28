import React,{useState} from 'react'
import Moment from 'react-moment';


export default function DateFormat() {

  // const unixTimestamp = 198784740;
  const unixTimestamp = 1670521451000;
  

 const [date, setDate] = useState('');

 const t = Math.floor(new Date(date).getTime() / 1000);
 const handleChangetinput = (e) => {
   setDate(e.target.value);
 };

    
    //converting bigint format into date-month-year

const getDateFormat = (timestamp) => {
  const plus0 = (num) => `0${num.toString()}`.slice(-2);

  const d = new Date(timestamp);

  const year = d.getFullYear();
  const monthTmp = d.getMonth() + 1;
  const month = plus0(monthTmp);
  const date = plus0(d.getDate());

  return `${year}-${month}-${date}`;
};

    const dateFormat = getDateFormat(unixTimestamp);


  return (
    <div>
      DateFormat
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        requiretinput
        type="date"
        className="form-controltinput"
        name="validitytinput"
        placeholder="From Datetinput"
        onChange={(e) => handleChangetinput(e)}
        value={date}
      />
      <br />
      <Moment unix>{unixTimestamp}</Moment>
      <br />
      <p>{t}</p>
      {/* <Moment unix>{t}</Moment> */}
      {/* converting Big Int 198784740 format to Date  */}
      <p>{dateFormat}</p>
      <br />
    </div>
  );
}
