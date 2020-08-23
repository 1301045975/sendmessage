<template>
    <div>
        <my-header></my-header>
        <div class="cheader">
            <div style="padding-top: 30px">
                <el-row class="csearch" type="flex" justify="center">
                    <el-col
                        :span="2"
                        style="font-size: 28px;cursor: pointer;color: #00ae66;font-weight: bold"
                    >军军房产</el-col>
                    <el-col :span="8">
                        <el-input
                            placeholder="请输入内容"
                            v-model="searchContent"
                            class="input"
                            style="border-radius: 0px"
                        ></el-input>
                    </el-col>
                    <el-button type="success" class="cbtn-bg" @click="searchHouse">开始找房</el-button>
                </el-row>
            </div>
        </div>
        <div style="width: 60%;margin: 0 auto;padding: 20px">
            <el-row class="crow">
                <label class="box-item4em">区域：</label>
                <div class="crow-right">
                    <el-link
                        v-for="(areaId, index) in areaIdAll"
                        :key="index"
                        @click="handleAreaIdClick(areaId.id)"
                        :class="areaId.id == areaIdSelected ? 'box-item4em link-active' : 'box-item4em'"
                    >{{areaId.display}}</el-link>
                </div>
            </el-row>

            <el-row class="crow" v-for="(name, i) in filterRowsName" :key="i">
                <label class="box-item4em">{{name}}：</label>
                <div class="crow-right">
                    <el-checkbox-group v-model="filterRowsChecked[i]">
                        <el-checkbox
                            class="box-item6em"
                            v-for="(range, j) in filterRowsRight[i]"
                            :label="range.label"
                            :key="j"
                        >{{range.display}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </el-row>

            <!-- <div class="crow">
                <label>更多：</label>
                <dropdown_year style="margin-left: 10px;display: inline"></dropdown_year>
                <dropdown_type style="margin-left: 10px;display: inline"></dropdown_type>
                <dropdown_floor style="margin-left: 10px;display: inline"></dropdown_floor>
                <dropdown_direction style="margin-left: 10px;display: inline"></dropdown_direction>
                <dropdown_build style="margin-left: 10px;display: inline"></dropdown_build>
            </div> -->
        </div>
        <div style="width: 60%;margin: 0 auto;padding: 20px">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
            >
                <el-menu-item index="1">默认排序</el-menu-item>
                <el-menu-item index="3">最新发布</el-menu-item>
                <el-menu-item index="4">房屋总价</el-menu-item>
                <el-menu-item index="5">房屋单价</el-menu-item>
                <el-menu-item index="6">房屋面积</el-menu-item>
            </el-menu>
            <el-row>
                <h2>共找到{{123}}套太原二手房</h2>
            </el-row>
            <el-divider></el-divider>
            <house-item></house-item>
            <house-item></house-item>
            <house-item></house-item>
            <house-item></house-item>
            <house-item></house-item>
            <house-item></house-item>
            <el-pagination
                @size-change="fetchData"
                @current-change="fetchData"
                :current-page.sync="currentPage"
                :page-sizes="[5,10,20]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="100"
            ></el-pagination>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script type="text/javascript">
import cheader from "@/components/newheader";
import oldHouseApi from "@/api/oldhouse";
import informationApi from "@/api/information";
// import BMap from "BMap";
import { mapGetters } from "vuex";
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import HouseItem from "@/components/rent/HouseItem.vue";

export default {
    name: "Old",
    components: {
        MyHeader,
        MyFooter,
        HouseItem
    },
    computed: {
        // ...mapGetters(["name", "uid"]);
    },
    created() {
        // 获取过滤框的数据
        this.fetchCityConfig('510100');
    },
    data() {
        return {
            center: { lng: 0, lat: 0 },
            zoom: 3,
            pojo: {},
            agent: {},
            agents: [],
            activeIndex: "/oldHouse/info",
            centerDialogVisible: false,
            messageAgent: {},
            messagePojo: {
                toId: "",
                msg: ""
            },
            websocket: null,
            data: "",
            content: "",
            requestHouseFlag: false,
            request: {
                house_id: ""
            },
            searchContent: "",
            currentPage: 1,
            areaIdAll: [],
            areaIdSelected: -1,
            areaIdLevel : 0,
            filterRowsName: ["售价", "面积", "房型"],
            filterRowsRight: [[], [], []],
            filterRowsChecked: [[], [], []],
        };
    },
    mounted() {
        // 
    },
    methods: {
        searchHouse() {
            //
        },
        handleSelect() {
            //
        },
        fetchData() {
            //
        },
        handleAreaIdClick(id) {
            this.areaIdSelected = id;
        },
        // 解析range字符串
        rangeParse(rangeStr, unitType){
            unitType = (unitType ? unitType : "");
            let ranges = rangeStr.split(',');
            let ret = new Array(ranges.length);
            ranges.forEach((item, i) => {
                ret[i] = {};
                ret[i].display = item + unitType;
                let reNum = /\d+/g
                let res = item.match(reNum);
                let minValue = 0, maxValue = 99999999;
                if(res){
                    res = res.map(val => parseInt(val));
                    if(res.length > 1) minValue = res[0], maxValue = res[1];
                    else if(item.startsWith('小')) maxValue = res[0];
                    else minValue = res[0];
                }
                ret[i].label = {
                    minValue: minValue,
                    maxValue: maxValue,
                }
            });
            return ret;
        },
        // 获取城市配置信息
        fetchCityConfig(cityCode){
            oldHouseApi.getByCityCode(cityCode).then((response) => {
                if(response.code == 200 && response.data){
                    let data =  response.data;
                    // 地域
                    // 
                    // 三个范围
                    let dd = ['ctySaleRange', 'ctyHouseArea', 'ctyHouseType'];
                    let unitTypes = ["万", "m²", ""];
                    dd.forEach((item, index) => {
                        this.filterRowsRight.splice(index, 1, this.rangeParse(data[item], unitTypes[index]));
                    });
                    // 更多
                }
            });
        }
    }
};
</script>

<style scoped>
.link-active {
    color: blue;
}

.margin6em {
    margin-right: 2em;
}

.cheader {
    width: 100%;
    height: 100px;
    background: #f5f5f6;
}
span {
    color: #000;
}
.csearch {
    width: 100%;
}
.cbtn-bg {
    background: #00ae66;
    border: none;
    border-radius: 0px;
}
.crow {
    line-height: 30px;
    display: flex;
    flex-direction: row;
}

.crow-right {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.cbtn {
    border: none;
    border-radius: 0px;
}

.box-mg-right2em {
    margin-right: 2em;
}

.box-item6em {
    width: 6em;
    margin-right: 2em;
}
.box-item4em {
    width: 4em;
    margin-right: 0.8em;
}
</style>
