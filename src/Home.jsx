import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";
import React from 'react';
import Card from './Card';


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("https://wild-pink-python-yoke.cyclic.app/api/getkey")

        const { data: { order } } = await axios.post("https://wild-pink-python-yoke.cyclic.app/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Ananda Gharami",
            description: "Payment of RazorPay",
            image: "https://avatars.githubusercontent.com/u/86967865?v=4",
            order_id: order.id,
            callback_url: "https://wild-pink-python-yoke.cyclic.app/api/paymentverification",
            prefill: {
                name: "Ananda Gharami",
                email: "anandagharami.am@gmail.com",
                contact: "8420377092"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

                <Card amount={5000} 
                
                img={"https://rukminim2.flixcart.com/image/416/416/k12go7k0/mobile/8/e/b/mi-redmi-8a-mzb8298in-original-imafkmhqztfbabww.jpeg?q=70&crop=false"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70&crop=false"} checkoutHandler={checkoutHandler} />

            </Stack>
        </Box>
    )
}

export default Home