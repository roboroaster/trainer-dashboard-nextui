"use client";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import { Progress,Spacer, Button } from "@nextui-org/react";
import { useState,useEffect } from "react";
const axios = require('axios');

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [list, setlist] = useState([]);
  const [isClient, setIsClient] = useState(false);
  useEffect(()=>{
    setIsClient(true);
  },[]);
  useEffect(() => {
    fetch('http://localhost:8000/api/dashboard')
      .then((res) => res.json())
      .then((data) => {
        setlist(data)
        setLoading(false)
      })
  }, [])
  // const list = [
  //   {
  //     name: "Rachit K.",
  //     calorieProgress: 50,
  //     exerciseProgress: 40,
  //   },
  //   {
  //     name: "John Doe",
  //     calorieProgress: 95,
  //     exerciseProgress: 90,
  //   },
  //   {
  //     name: "Karan S.",
  //     calorieProgress: 5,
  //     exerciseProgress: 70,
  //   },
  //   {
  //     name: "Jane tho",
  //     calorieProgress: 90,
  //     exerciseProgress: 80,
  //   },
  //   {
  //     name: "Haley Smith",
  //     calorieProgress: 75,
  //     exerciseProgress: 60,
  //   },
  //   {
  //     name: "Rockford J",
  //     calorieProgress: 35,
  //     exerciseProgress: 20,
  //   },
  //   {
  //     name: "Alexa J",
  //     calorieProgress: 65,
  //     exerciseProgress: 50,
  //   },
  // ]

  return (
    <div className="m-2">
      <h1 className="text-6xl font-extrabold m-3 text-center">Client Dashboard</h1>
    <div className="gap-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 m-7 py-10">
      {list.map((item,index)=>(
        <Card shadow="sm" key={index} isPressable onPress={()=>{console.log("item pressed")}} className="m-4">
          <CardHeader className="flex gap-3 font-bold ">
            <Image
            alt="profile"
            height={40}
            width={40}
            radius="sm"
            src={item.photoURL}
            />
            {item.name}
          </CardHeader>
          <CardBody>
            <Progress
            size="lg"
            radius="lg"
            classNames={{
              base: "max-w-md mb-2",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-pink-500 to-orange-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }} 
            
            
            value={item.calorieProgress}
            label="Caloric Progress"
            showValueLabel={true}
            />
            <Progress
            size="lg"
            radius="sm"
            classNames={{
              base: "max-w-md mb-2",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-green-500 to-green-700",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }} 
            value={item.exerciseProgress || 56}
            label="Exercise Progress"
            showValueLabel={true}
            />
            {isClient && <>
            <Button color="success" className="m-3" >See Exercise plan</Button>
            <Button color="success" variant="bordered" className="m-3" >See Caloric Details</Button>
            
            </>}
          </CardBody>
        </Card>

      ))}
    </div>
    </div>
  );
}
