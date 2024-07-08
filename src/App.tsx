import './App.css'
import { Button } from './components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'

import { useEffect, useState } from 'react'

function App() {

  const bannerImages = [image1, image3]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % bannerImages.length)
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bannerImages.length]);


  return (
    <div className='flex w-full h-screen'>
      <div className='flex flex-1 bg-backgroud items-center justify-center'>
        <Tabs defaultValue="account" className="w-[400px] bg-white p-5">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" >Create New Account</TabsTrigger>
            <TabsTrigger value="password" >Join To Play</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Create your account for free, call your friends and come have fun.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => setIsDialogOpen(true)} >REGISTER</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Log in to your account to play and have fun with your friends
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">

                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" />
                </div>

              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>START GAME</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex-1 overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat bg-top transition-transform duration-1000 ease-in-out hue-rotate-15 brightness-75 hover:scale-105 hover:hue-rotate-0 hover:brightness-100"
          style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}
        >
        </div>
      </div>

      <div className='hidden'>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div className='flex flex-col items-center py-2'>
              <DialogTitle>Confirm you pin access!</DialogTitle>
              <DialogDescription>
                The pin was sent to the following email:
              </DialogDescription>
              </div>
             
              <div className='w-full flex justify-center py-2'>
              <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
                <Button>CONFIRM PIN</Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default App
