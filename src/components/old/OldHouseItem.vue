<template>
    <div>
        <el-row style="width:100%; padding:20px 0;">
            <el-col style="width:100%; float:left">
                <el-row
                    :gutter="20"
                    style="height: 200px; cursor:pointer;border-bottom: 1px #DCDFE6 solid"
                >
                    <el-col :span="4" style="height: 100%;">
                        <el-row style="height: 90%;">
                            <el-image :src="property.coverImg" style="height: 100%;"></el-image>
                        </el-row>
                    </el-col>
                    <el-col :span="16">
                        <el-row class="crow">
                            <a :href="property.detailUrl">
                                <span style="font-size:16pt">
                                    <strong>{{property.title}}</strong>
                                </span>
                            </a>
                        </el-row>
                        <el-row class="crow">
                            <i class="el-icon-location-outline"></i>&nbsp;
                            <span>{{property.location}}</span>
                        </el-row>
                        <el-row class="crow">
                            <i class="el-icon-house"></i>&nbsp;
                            <span>{{property.countFT}}</span> |
                            <span>{{property.houseArea}}</span> |
                            <span>{{property.direction}}</span> |
                            <span>{{property.decoration}}</span> |
                            <span>{{property.floor}}</span> |
                            <span>{{property.completeYear}}</span> |
                            <span>{{property.houseType}}</span>
                        </el-row>
                        <el-row class="crow">
                            <i class="el-icon-star-off"></i>&nbsp;
                            <span>{{property.numFav}}</span> |
                            <span>{{property.lastUpdate}}</span>
                        </el-row>
                        <el-row class="crow">
                            <el-tag v-if="property.isSupportVR">VR房源</el-tag>&nbsp;
                            <el-tag type="success" v-if="property.isAllowView">随时看房</el-tag>&nbsp;
                            <el-tag type="danger" v-if="property.isOverFiveYears">房本满五年</el-tag>
                        </el-row>
                    </el-col>
                    <el-col :span="4" style="height: 100%;padding-top:40px">
                        <span
                            style="color:red;font-weight: bold;font-size: 28px"
                        >{{property.allPrice}}</span>
                        <br />
                        <span style="line-height: 30px">{{property.unitPrice}}</span>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import cheader from "@/components/newheader";
import informationApi from "@/api/information";
import requestApi from "@/api/request";
// import BMap from "BMap";
// import { mapGetters } from "vuex";

export default {
    name: "OldHouseItem",
    components: {},
    props: {
        propertyInfo: {
            type: Object,
            default() {
                return null;
            }
        }
    },
    mounted() {
        // console.log(this.$route.params.id);
        // console.log(this.propertyInfo);
        if (this.propertyInfo) this.property = this.propertyInfo;
    },
    data() {
        return {
            property: {
                coverImg:
                    "https://1321654.oss-cn-beijing.aliyuncs.com/1586262198682.jpg",
                detailUrl: "#",
                title:
                    "金牛区金科北路交大智能八期101.00平米精装2室1厅1卫1阳台150.0万元",
                location: "季柳园-犀浦",
                countFT: "2室1厅",
                houseArea: "101平米",
                direction: "南",
                decoration: "精装",
                floor: "高层（共30）",
                completeYear: "2020年建",
                houseType: "塔版结合",
                numFav: "64关注",
                lastUpdate: "4个月以前发布",
                isSupportVR: true,
                isAllowView: true,
                isOverFiveYears: false,
                allPrice: "150万",
                unitPrice: "单价：14851.5元/m²"
            }
        };
    },
    computed: {
        // ...mapGetters(["name", "uid"])
    }
};
</script>

<style scoped>
.cheader {
    width: 100%;
    height: 220px;
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
    padding-top: 2px;
}

.cbtn {
    border: none;
    border-radius: 0px;
}

a {
    text-decoration: none;
}
</style>
