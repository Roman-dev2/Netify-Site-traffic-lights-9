
import './Home.css';

function Home() {
  return (
    <div>
      <h1>Лабораторна робота №6</h1>
    
<p>Мета: Робота з анімацією</p>
<p>Дана робота є продовженням попередньої</p>
<p>
Створити у склонованій директорії React проект з назвою 'traffic-lights-5'
<br></br>
Перенести попередню лабораторну
<br></br>
При клікані на колір сфітлофора реалізувати ефект "моргання" (плюсом буде реалізація зміни яскравості кольору, кількості "моргань", тощо)
<br></br>
{/* import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const ref = useRef(1);
  const [isClick, setIsClick] = useState(true);

  useEffect(() => {}, [isClick]);

  return (
    <motion.div
      className="box"
      key={ref.current}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      onClick={() => {
        ref.current++;
        setIsClick(!isClick);
      }}
    />
  );
}*/}
<br></br>
{/*.box {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: blue;
    }
  */}
<br></br>
Оформити звіт на локальному комп'ютері
<br></br>
Запушити лаборатону в github.classroom
<br></br>
В Google classroom додати посилання на звіт</p>
    </div>
  );
}

export default Home;