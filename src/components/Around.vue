<template>
    <!--周边配套-->
    <div class="around" id="around">
        <h2 class="aroundTitle">周边配套</h2>

        <!--地图-->
        <div class="map-tab" id="map-tab">

            <div class="map-content" :name="addrName">

                <div class="detail-map">

                    <div class="aroundContainer">
                        <div class="map-box-left" id="map-box-left"></div>
                        <div class="tabBox">
                            <ul class="aroundType">
                                <li class="LOGCLICK selectTag" data-log_evtid="10242" data-bl="traffic" @click="levelOneClick()"
                                    data-key="地铁站,公交站" data-index="subway,bus" data-length="10,10" id="traffic_panel">交通
                                </li>
                                <li class="LOGCLICK " data-log_evtid="10242" data-bl="education" data-key="幼儿园,小学,中学,大学"
                                    data-index="kindergarten,primary-school,middle-school,University"
                                    data-length="10,10,10,10">教育
                                </li>
                                <li class="LOGCLICK" data-log_evtid="10242" data-bl="medical" data-key="医院,药店"
                                    data-index="hospital,pharmacy" data-length="10,10">医疗
                                </li>
                                <li class="LOGCLICK" data-log_evtid="10242" data-bl="shopping" data-key="商场,超市,市场"
                                    data-index="mall,supermarket,market" data-length="10,10,10">购物
                                </li>
                                <li class="LOGCLICK" data-log_evtid="10242" data-bl="life" data-key="银行,ATM,餐厅,咖啡馆"
                                    data-index="bank,atm,restaurant,coffee" data-length="10,10,10,10">金融
                                </li>
                                <li class="LOGCLICK" data-log_evtid="10242" data-bl="entertainment"
                                    data-key="公园,电影院,健身房,体育馆" data-index="park,cinema,gym,sport"
                                    data-length="10,10,10,10">休闲
                                </li>
                            </ul>
                            <div class="itemTagBox" id="traffic">
                                <div class="tagStyle LOGCLICK select" data-bl="subway" data-log_evtid="10242"
                                     data-index="subway" data-length="10">地铁站
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="bus" data-log_evtid="10242" data-index="bus"
                                     data-length="10">公交站
                                </div>
                            </div>
                            <div class="itemTagBox" id="education" style="display:none">
                                <div class="tagStyle LOGCLICK select" data-bl="kindergarten" data-log_evtid="10242"
                                     data-index="kindergarten" data-length="10">幼儿园
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="primary-school" data-log_evtid="10242"
                                     data-index="primary-school" data-length="10">小学
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="middle-school" data-log_evtid="10242"
                                     data-index="middle-school" data-length="10">中学
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="University" data-log_evtid="10242"
                                     data-index="University" data-length="10">大学
                                </div>
                            </div>
                            <div class="itemTagBox" id="medical" style="display:none">
                                <div class="tagStyle LOGCLICK select" data-bl="hospital" data-log_evtid="10242"
                                     data-index="hospital" data-length="10">医院
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="pharmacy" data-log_evtid="10242"
                                     data-index="pharmacy" data-length="10">药店
                                </div>
                            </div>
                            <div class="itemTagBox" id="shopping" style="display:none">
                                <div class="tagStyle LOGCLICK select" data-bl="mall" data-log_evtid="10242"
                                     data-index="mall" data-length="10">商场
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="supermarket" data-log_evtid="10242"
                                     data-index="supermarket" data-length="10">超市
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="market" data-log_evtid="10242"
                                     data-index="market" data-length="10">市场
                                </div>
                            </div>
                            <div class="itemTagBox" id="life" style="display:none">
                                <div class="tagStyle LOGCLICK select" data-bl="bank" data-log_evtid="10242"
                                     data-index="bank" data-length="10">银行
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="atm" data-log_evtid="10242" data-index="atm"
                                     data-length="10">ATM
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="restaurant" data-log_evtid="10242"
                                     data-index="restaurant" data-length="10">餐厅
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="coffee" data-log_evtid="10242"
                                     data-index="coffee" data-length="10">咖啡馆
                                </div>
                            </div>
                            <div class="itemTagBox" id="entertainment" style="display:none">
                                <div class="tagStyle LOGCLICK select" data-bl="cinema" data-log_evtid="10242"
                                     data-index="cinema" data-length="10">电影院
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="gym" data-log_evtid="10242" data-index="gym"
                                     data-length="10">健身房
                                </div>
                                <div class="tagStyle LOGCLICK" data-bl="sport" data-log_evtid="10242" data-index="sport"
                                     data-length="10">体育馆
                                </div>
                                <div class="tagStyle LOGCLICK select" data-bl="park" data-log_evtid="10242"
                                     data-index="park" data-length="10">公园
                                </div>
                            </div>

                            <div class="aroundList" id="mapListContainer">
                                <ul class="itemBox">

                                </ul>
                            </div>
                            <div class="loading" style="display: none;">
                                <img src="https://s1.ljcdn.com/feroot/pc/asset/ershoufang/sellDetail/img/loading.gif?_v=20180126155619"
                                     class="loadingImg">
                                <span class="loadingText">努力加载中...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--地图end-->
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Around",
        data() {
            return {
                city: "成都市西南交大",
                addrName: '交大八期',
                map: "",
                latitude: "",
                longitute: "",
                MapTitleId: '',     //地图面板ID
                keyword: "交通",        //一级面板查询字
                subKeyword: "地铁站",   //二级面板查询字
                iconURL: "",
                pointArray: [],        //周边点经纬度Point对象数组
                ServiceArray: [],      //周边点详细信息
                //var DistanceArr = new Array();       //周边点到中心点距离
            }
        },
        methods: {
            //初始化地图
            initMap() {
                this.setMapEvent();//设置地图事件
                this.addMapControl();//向地图添加控件
                this.addMapOverlay();//向地图添加覆盖物
            },
            //地图面板点击事件 第一级
            levelOneClick() {

            },
            levelTwoClick() {

            },
            //根据一二级关键字请求百度API
            searchData() {
                axios.get({
                    url: 'http://api.map.baidu.com/geocoder/v2/',
                    data: {
                        address: this.addrName,
                        ak: "9pwN0orTUYNywM8HBvFC9qSgGpIGHtKO"
                    }
                }).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            },
            //添加周边点
            addpoint(longitute, latitude, keyword) {

            },
            setMapEvent() {
                // map.enableScrollWheelZoom();
                // map.enableKeyboard();
                // map.enableDragging();
                // map.enableDoubleClickZoom()
            },
            addClickHandler(target, window) {
                target.addEventListener("click", function () {
                    target.openInfoWindow(window);
                });
            },
            //向地图添加控件
            addMapControl() {
                // var scaleControl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
                // scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
                // map.addControl(scaleControl);
                // var navControl = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: 0});
                // map.addControl(navControl);
            },
            // 复杂的自定义覆盖物
            ComplexCustomOverlay(point, text, mouseoverText) {
                this._point = point;
                this._text = text;
                this._overText = mouseoverText;
            },
            //向地图添加覆盖物
            addMapOverlay() {

            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .aroundContainer {
        width: 1150px;
        margin: 0 auto;
        height: 510px;
        margin-top: 18px;
        position: relative;
        overflow: hidden;
    }

    .tabBox {
        position: absolute;
        top: 24px;
        bottom: 24px;
        right: 18px;
        width: 385px;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }

    .tabBox .aroundType {
        width: 100%;
        height: 40px !important;
        font-size: 0;
        background-color: #fff;
        border-radius: 2px;
    }

    .tabBox .aroundType li.selectTag {
        position: relative;
        background: #fff;
        font-weight: 900;
        color: #2a86ef;
        box-shadow: 1px 0 0 rgba(0, 0, 0, 0.05);
    }

    .tabBox .aroundType li {
        cursor: pointer;
        display: inline-block;
        width: 16.66%;
        line-height: 40px;
        text-align: center;
        background: #f1f1f1;
        color: #384043;
        font-size: 14px;
    }

    .tabBox .itemTagBox {
        box-sizing: border-box;
        margin-left: 0px;
        padding-top: 0px;

    }

    .tabBox .itemTagBox .tagStyle.select {
        box-sizing: border-box;
        border-bottom: 1px solid #2a86ef;
        color: #2a86ef;
        font-size: 16px;
    }

    .tabBox .itemTagBox .tagStyle {
        box-sizing: border-box;

        color: black;
        font-size: 16px;
    }

    .tabBox .itemTagBox .tagStyle {
        display: inline-block;
        height: 43px;
        line-height: 43px;
        margin-right: 22px;
        cursor: pointer;
        font-size: 16px;
    }

    .tagStyle.LOGCLICK.select {
        box-sizing: border-box;
        margin-left: 17px;
        padding-top: 10px;
        border-bottom: 1px solid #eeeeee;
    }

    .tagStyle.LOGCLICK {
        box-sizing: border-box;
        margin-left: 17px;
        padding-top: 10px;

    }

    .tabBox .aroundType li.selectTag:before {
        content: "";
        width: 100%;
        height: 2px;
        background: #2a86ef;
        position: absolute;
        top: 0;
        left: 0;
    }

    .tabBox .aroundList {
        padding-top: 10px;
        height: 363px;
        overflow-y: auto;
    }

    .tabBox .itemBox li {
        padding: 10px 0;
        cursor: pointer;
    }

    .contentBox, .makerDetailStyle {
        border-left: 2px solid #fff;
        padding: 0 23px;
    }

    .contentBox .itemContent, .makerDetailStyle .itemContent {
        color: #394043;
        font-size: 14px;
        overflow: hidden;
    }

    .contentBox .itemContent span, .makerDetailStyle .itemContent span {
        float: left;
        font-weight: bold;
    }

    .contentBox .itemContent .itemTitle, .makerDetailStyle .itemContent .itemTitle {
        max-width: 49%;
        margin-right: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .contentBox .itemContent span, .makerDetailStyle .itemContent span {
        float: left;
        font-weight: bold;
    }

    [class^="icon-"], [class*=" icon-"] {
        font-family: 'map-font' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .contentBox .itemContent .itemdistance, .makerDetailStyle .itemContent .itemdistance {
        width: 20%;
        float: right;
    }

    .contentBox .itemInfo, .makerDetailStyle .itemInfo {
        color: #9c9fa1;
        font-size: 14px;
        padding: 8px 19px 0 0px;
        text-align: justify;
        overflow: hidden;
        word-break: break-all;
        word-wrap: break-word;
        white-space: normal;
    }
</style>