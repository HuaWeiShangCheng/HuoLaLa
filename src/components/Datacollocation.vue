<template>
    <div class="box">
        <dl>
            <dt>搭配</dt>
            <dd>
                <li v-for="(SaveMmoney,index) in SaveMmoneys" :key="index">
                    <img :src="'../../img2/' + SaveMmoney.img" alt="">
                    <p>{{SaveMmoney.money}}</p>
                </li>
            </dd>
            <span>＞</span>
        </dl>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Datacollocation",
    data(){
        return {
            SaveMmoneys:[]
        }
    },
    async created(){
        let res = await axios ({
            url:"http://localhost:3000/SaveMmoneys"
        });
        this.SaveMmoneys = res.data;
    }
}
</script>

<style scoped>
    .box{
        width: 100%;
        height: 82px;
        padding: 0 10px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom: 10px solid #f9f9f9;
    }
    .box dl{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 82px;
    }
    .box dl dt{
        font-size:13px ;
        color: #333333;
        font-weight: bold;
    }
    .box dl li{
        width: 48px;
        height: 48px;
        position: relative;
    }
    .box dl li img{
        width: 100%;
        height: 100%;
    }
     .box dl li p{
        width: 48px;
        font-size: 12px;
        background-color: rgba(242,242,242,.8);
        text-align: center;
        position: absolute;
        bottom: 0;
    }
    .box dl dd{
        display: flex;
        justify-content: space-around;
        width: 85%;
    }
</style>