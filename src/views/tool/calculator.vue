<template>
    <div>
        <MyHeader></MyHeader>
            <div style="width: 60%;margin:  0 auto;">
                <el-row>
                    <el-col :span="5">
                        <h2 style="color: #00ae66;">万径房产</h2>
                    </el-col>
                    <el-col :span="14" style="text-align: center;padding-top: 100px">
                        <h1>购房计算</h1>
                        <span>复杂的房贷税费计算，链家购房工具帮你解决</span>
                    </el-col>
                    <el-col :span="5" style="text-align: right">
                        <span style="line-height: 70px">下载万径APP</span>
                    </el-col>
                </el-row></div>
        <div style="height: 260px;width: 100%">
            <calculator_tool></calculator_tool></div>
    </div>
</template>

<script>
    import MyHeader from "../../components/common/MyHeader";
    import calculator_tool from "../../components/calculator_tool";

    export default {
        name: "index",
        components: {
            MyHeader,
            calculator_tool,

        },
        data() {
            return {
                sdje: 0,
                dkbl: 0,
                gjjje: 0,
                jzlv: 3.25,
                jzlvfs: 3.575,
                lpr: 0,
                base: 0,
                sdyear: 0,
                rate: 0.0,
                gjjyear: 0,
                gjjll: 0,
                isZhdk: false,
                isLpr:false,
                isBase:false,
                isSdll:false,
                isDkze: false,
                isSd: true,
                isJbsdll: false,
                isGjj: false,
                isFwzj: false,
                isDkbl: false,
                dkze:0,
                fwzj: 0,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    style: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                jbsdll: [
                    {
                        value: '4.410',
                        label: '旧版基准利率9折(4.410%) '
                    },
                    {
                        value: '4.655',
                        label: '旧版基准利率95折(4.655%)'
                    },
                    {
                        value: '4.900',
                        label: '旧版基准利率(4.900%)'
                    },
                    {
                        value: '5.145',
                        label: '旧版基准利率上浮5%(5.145%)'
                    },
                    {
                        value: '5.390',
                        label: '旧版基准利率上浮10%(5.390%)  '
                    },
                    {
                        value: '5.635',
                        label: '旧版基准利率上浮15%(5.635%)'
                    }, {
                        value: '5.880',
                        label: '旧版基准利率上浮20%(5.880%)'
                    },
                    {
                        value: '6.125',
                        label: '旧版基准利率上浮25%(6.125%)'
                    },
                    {
                        value: '6.370',
                        label: '旧版基准利率上浮30%(6.370%)'
                    },
                    {
                        value: '6.615',
                        label: '旧版基准利率上浮35%(6.615%)'
                    },
                    {
                        value: '6.860',
                        label: '旧版基准利率上浮40%(6.860%)'
                    }
                ],
                gjjlls: [
                    {
                        value: '3.25',
                        label: '基准利率(3.250%)'
                    },
                    {
                        value: '3.575',
                        label: '基准利率上浮10%(3.575%)'
                    }
                ],
                bili: [
                    {
                        value: '0.7',
                        label: '7成'
                    },
                    {
                        value: '0.65',
                        label: '6.5成'
                    },
                    {
                        value: '0.6',
                        label: '6成'
                    },
                    {
                        value: '0.55',
                        label: '5.5成'
                    },
                    {
                        value: '0.5',
                        label: '5成'
                    },
                    {
                        value: '0.45',
                        label: '4.5成'
                    },
                    {
                        value: '0.4',
                        label: '4成'
                    },
                    {
                        value: '0.35',
                        label: '3.5成'
                    },
                    {
                        value: '0.3',
                        label: '3成'
                    },
                    {
                        value: '0.25',
                        label: '2.5成'
                    },
                    {
                        value: '0.2',
                        label: '2成'
                    }
                ],
                years: [
                    {
                        value: 30,
                        label: 30
                    },
                    {
                        value: 29,
                        label: 29
                    },
                    {
                        value: 28,
                        label: 28
                    },
                    {
                        value: 27,
                        label: 27
                    },
                    {
                        value: 26,
                        label: 26
                    },
                    {
                        value: 25,
                        label: 25
                    },
                    {
                        value: 24,
                        label: 24
                    },
                    {
                        value: 23,
                        label: 23
                    },
                    {
                        value: 22,
                        label: 22
                    },
                    {
                        value: 21,
                        label: 21
                    },
                    {
                        value: 20,
                        label: 20
                    },
                    {
                        value: 19,
                        label: 19
                    },
                    {
                        value: 18,
                        label: 18
                    },
                    {
                        value: 17,
                        label: 17
                    },
                    {
                        value: 16,
                        label: 16
                    },
                    {
                        value: 15,
                        label: 15
                    },
                    {
                        value: 14,
                        label: 14
                    },
                    {
                        value: 13,
                        label: 13
                    },
                    {
                        value: 12,
                        label: 12
                    },
                    {
                        value: 11,
                        label: 11
                    },
                    {
                        value: 10,
                        label: 10
                    },
                    {
                        value: 9,
                        label: 9
                    },
                    {
                        value: 8,
                        label: 8
                    },
                    {
                        value: 7,
                        label: 7
                    },
                    {
                        value: 6,
                        label: 6
                    },
                    {
                        value: 5,
                        label: 5
                    },
                    {
                        value: 4,
                        label: 4
                    },
                    {
                        value: 3,
                        label: 3
                    },
                    {
                        value: 2,
                        label: 2
                    },
                    {
                        value: 1,
                        label: 1
                    }
                ],
                lixi: 0,
                lixihe: 0,
                yuegong: 0,
                lixiBen2:0,
                lixiheBen2:0,
                yuegongBen2:0,
                activeName: 'first'
            }
        },
        methods: {
            open() {
                this.$alert('自2019年10月8日起，新发放的商业住房贷款的贷款利率由“贷款基准利率（4.9%）”转换为“贷款款市场报价利率（LPR）”在LPR的基础上增加基点来确定最终的商贷利率； LPR每月20日（遇节假日顺延）报价一次，可在中国人民银行网站查询。', 'LPR（贷款市场报价利率）',
                    {
                        confirmButtonText: '确定',
                        // callback: action => {
                        //     this.$message({
                        //         type: 'info',
                        //         message: `action: ${ action }`
                        //     }
                        //     );
                        // }
                    });
            },
            computeMoney(jinge,rate,year){
                var P = jinge;
                var R = rate / 100 / 12;
                var N = year*12;
                var yuegong = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1) * 10000;
                yuegong = yuegong.toFixed(2);
                var lixihe = yuegong * N / 10000;
                lixihe =lixihe.toFixed(2);
                var lixi =lixihe - jinge;
                lixi = lixi.toFixed(2);
                var info = {"yuegong":yuegong,"lixihe":lixihe,"lixi":lixi}
                return info;
            },
            computeBenjin(jinge,rate,year){
                var P = jinge;
                var R = rate / 100 / 12;
                var N = year*12;
                var yuegongBen = (jinge/N + jinge * R) *10000;
                this.yuegongBen2 = yuegongBen.toFixed(2);
                var y1 = this.yuegongBen2;
                var lixiBen = (N + 1) * P * R / 2;
                this.lixiBen2 =lixiBen.toFixed(2);
                var l1 = this.lixiBen2;
                var lixiheBen = parseFloat(this.lixiBen2) + parseFloat(jinge);
                this.lixiheBen2 = parseFloat(lixiheBen).toFixed(2);
                var lh1 = this.lixiheBen2;
                var info = {"yuegongBen":y1,"lixiBen":l1,"lixiheBen":lh1};
                return info;
            },
            onSubmit() {
                if (this.isSd == true) {
                    var M = this.sdje;
                    var R = this.rate;
                    var Y = this.sdyear;
                    var obj = this.computeMoney(M,R,Y);
                    this.yuegong = obj["yuegong"];
                    this.lixihe = obj["lixihe"];
                    this.lixi = obj["lixi"];

                    var objBen = this.computeBenjin(M,R,Y);
                    this.yuegongBen2 = objBen["yuegongBen"];
                    this.lixiheBen2 = objBen["lixiheBen"];
                    this.lixiBen2 = objBen["lixiBen"];
                } else if (this.isGjj == true) {
                    this.sdje = this.gjjje;
                    this.sdyear = this.gjjyear;
                    M = this.sdje;
                    R = this.gjjll;
                    Y = this.sdyear;
                    obj = this.computeMoney(M,R,Y);
                    this.yuegong = obj["yuegong"];
                    this.lixihe = obj["lixihe"];
                    this.lixi = obj["lixi"];

                    objBen = this.computeBenjin(M,R,Y);
                    this.yuegongBen2 = objBen["yuegongBen"];
                    this.lixiheBen2 = objBen["lixiheBen"];
                    this.lixiBen2 = objBen["lixiBen"];
                }
                if(this.isZhdk == true){
                    var M2 = this.sdje;
                    var R2 = this.rate;
                    var Y2 = this.sdyear;
                    var obj2 = this.computeMoney(M2,R2,Y2);

                    var M3 =  this.gjjje;
                    var R3 = this.gjjll;
                    var Y3 = this.gjjyear;
                    var obj3 = this.computeMoney(M3,R3,Y3);
                    var yueA = obj3["yuegong"];
                    var lixiA = obj3["lixi"];
                    var lixiheA = obj3["lixihe"];

                    this.yuegong = parseFloat(obj2["yuegong"]) + parseFloat(yueA);
                    this.yuegong = this.yuegong.toFixed(2);
                    this.lixi = parseFloat(obj2["lixi"]) + parseFloat(lixiA);
                    this.lixi = this.lixi.toFixed(2);
                    this.lixihe = parseFloat(this.lixi) + parseFloat(M3) + parseFloat(M2);
                    this.lixihe = this.lixihe.toFixed(2);

                    var objBen2 = this.computeBenjin(M2,R2,Y2);
                    var objBen3 = this.computeBenjin(M3,R3,Y3);
                    var yuebenA = parseFloat(objBen3["yuegongBen"]);
                    var lixibenA = parseFloat(objBen3["lixiBen"]);
                    this.yuegongBen2 = parseFloat(objBen2["yuegongBen"]) + yuebenA;
                    this.yuegongBen2 = this.yuegongBen2.toFixed(2);
                    this.lixiBen2 = parseFloat(objBen2["lixiBen"]) + lixibenA;
                    this.lixiBen2 = this.lixiBen2.toFixed(2);
                    this.lixiheBen2 = parseFloat(this.lixiBen2) + parseFloat(M3) + parseFloat(M2);
                    this.lixiheBen2 = this.lixiheBen2.toFixed(2);
                    // this.lixiheBen2 = this.lixiBen2;
                    // this.lixiBen2 = (this.lixiheBen2 - parseFloat(M2) - parseFloat(M3)).toFixed(2);
                }
            },
            jsfsChange(selectValue) {
                if (selectValue == 'afwzj') {
                    this.isFwzj = true;
                    if(this.isZhdk == true || this.isSd == true){
                        this.isDkbl = true;
                    }
                } else {
                    this.isFwzj = false;
                    this.isDkbl = false;
                }
            },
            sdllfsChange(selectValue) {
                if (selectValue == 'ajbjzll') {
                    this.isJbsdll = true;
                    this.isSdll = true;
                    this.isBase = false;
                    this.isLpr = false;
                } else {
                    this.isJbsdll = false;
                    this.isSdll = false;
                    this.isBase = true;
                    this.isLpr = true;
                }
            },
            sdyearChange(selectValue) {
                this.sdyear = selectValue;
            },
            gjjyearChange(selectValue) {
                this.gjjyear = selectValue;
            },
            dklxChange(selectValue) {
                this.isZhdk = false;
                this.isLpr=false;
                this.isBase=false;
                this.isDkze = false;
                this.isSd = true;
                this.isGjj = false;
                if (selectValue == 'sydk') {
                    this.isGjj = false;
                    this.isdkze = false;
                    this.isZhdk = false;
                } else {
                    this.isGjj = true;
                }
                if (selectValue == 'gjjdk') {
                    this.isSd = false;
                    this.isBase = false;
                    this.isLpr = false;
                    this.isDkze = false;
                    this.isZhdk = false;
                } else {
                    this.isSd = true;
                    this.isBase = true;
                    this.isLpr = true;
                }
                if (selectValue == 'zhdk') {
                    this.isDkze = true;
                    this.isZhdk = true;
                }
            }
        },
        watch: {
            lpr: function () {
                this.rate = parseFloat(this.lpr) + parseFloat(this.base * 1.0) / 100;
            },
            base: function () {
                this.rate = parseFloat(this.lpr) + parseFloat(this.base * 1.0) / 100;
            },
            dkbl: function () {
                this.dkze = this.fwzj * this.dkbl;
            },
            fwzj: function () {
                this.dkze = this.fwzj * this.dkbl;
            },
            gjjje:function () {
                this.sdje = this.dkze - this.gjjje;
            },
            sdje:function () {
                this.gjjje = this.dkze - this.sdje;
            }
        }
    }
</script>

<style scoped>
    .el-form-item__label {
        color: #000000;
    }

    .crow {
        line-height: 30px;
    }

    .cbtn-bg {
        width: 200px;
        height: 50px;
        font-size: 18px;
        background: #00ae66;
        border: none;
        border-radius: 0px
    }

    .itemTitle {
        display: inline-block;
        vertical-align: top;
        padding: 15px 0;
        line-height: 1.2;
        color: #333;
        font-size: 14px;
        font-weight: 700;
    }

    .inputItem {
        display: inline-block;
        width: 435px;
        font-size: 14px;
        color: #333;
        *zoom: 1;
        width: 460px;
        border-bottom: 1px solid #f5f5f6;
    }

    .el-form-item label:after {
        content: "";
        display: inline-block;
    }

    .el-form-item__label {
        text-align: justify;
        height: 50px;
    }

    .repaymentTypeItem {
        font-size: 14px;
        font-weight: 700;
        display: inline-block;
    }
</style>
