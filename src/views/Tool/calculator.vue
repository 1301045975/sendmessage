<template>
    <div><my-header></my-header>

    <h2>房产计算器</h2>

<!--    <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--        <el-tab-pane label="房贷计算器" name="first">-->
<!--            <el-row style="padding-top: 20px" :gutter="40">-->
<!--                <el-col :span="12">-->
<!--                    <el-form ref="form" :model="form" label-width="80px">-->
<!--                        <el-form-item label="贷款类型">-->
<!--                            <el-select v-model="form.input1" placeholder="商业贷款">-->
<!--                                <el-option label="商业贷款" value="商业贷款"></el-option>-->
<!--                                <el-option label="公积金贷款" value="公积金贷款"></el-option>-->
<!--                                <el-option label="组合贷款" value="组合贷款"></el-option>-->
<!--                            </el-select>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="计算方式">-->
<!--                            <el-select v-model="form.input2" placeholder="按货款总额">-->
<!--                                <el-option label="按货款总额" value="按货款总额"></el-option>-->
<!--                                <el-option label="按房屋总价" value="按房屋总价"></el-option>-->
<!--                            </el-select>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="商贷金额" >-->
<!--                            <el-input style="width: 300px" type="text" v-model="form.desc1"  placeholder="请输入大于0的数字">-->
<!--                                <template slot="append">万元</template>-->
<!--                            </el-input>-->

<!--                        </el-form-item>-->
<!--                        <el-form-item label="商贷利率方式">-->
<!--                            <el-select v-model="form.input3" placeholder="按最新LPR">-->
<!--                                <el-option label="按最新LPR" value="按最新LPR"></el-option>-->
<!--                                <el-option label="按旧版基准利率" value="按旧版基准利率"></el-option>-->
<!--                            </el-select>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="LPR">-->
<!--                            <el-button type="text" @click="open">-->
<!--                                <i class="el-icon-info"></i>-->
<!--                            </el-button>-->
<!--                            <el-input style="width:350px" type="number" v-model="form.desc2" placeholder="请输入中国人民银行网站公布的最新LPR" >-->
<!--                                <template slot="append">%</template>-->
<!--                            </el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="基点">-->
<!--                            <el-input style="width: 300px" type="number" v-model="form.desc3">-->
<!--                                <template slot="append">BP(‱)</template>-->
<!--                            </el-input>-->
<!--                        </el-form-item>-->

<!--                        <el-form-item label="商贷利率" placeholder="4.65">-->
<!--                            <el-input style="width: 300px" type="text" v-model="form.desc4"></el-input>-->
<!--                        </el-form-item>-->

<!--                        <el-form-item label="商贷年限">-->
<!--                            <el-select v-model="form.input4" placeholder="10年">-->
<!--                                <el-option label="30年" value="30"></el-option>-->
<!--                                <el-option label="29年" value="29"></el-option>-->
<!--                                <el-option label="28年" value="28"></el-option>-->
<!--                                <el-option label="27年" value="27"></el-option>-->
<!--                                <el-option label="26年" value="26"></el-option>-->
<!--                                <el-option label="25年" value="25"></el-option>-->
<!--                                <el-option label="24年" value="24"></el-option>-->
<!--                                <el-option label="23年" value="23"></el-option>-->
<!--                                <el-option label="22年" value="22"></el-option>-->
<!--                                <el-option label="21年" value="21"></el-option>-->
<!--                                <el-option label="20年" value="20"></el-option>-->
<!--                                <el-option label="19年" value="19"></el-option>-->
<!--                                <el-option label="18年" value="18"></el-option>-->
<!--                                <el-option label="17年" value="17"></el-option>-->
<!--                                <el-option label="16年" value="16"></el-option>-->
<!--                                <el-option label="15年" value="15"></el-option>-->
<!--                                <el-option label="14年" value="14"></el-option>-->
<!--                                <el-option label="13年" value="13"></el-option>-->
<!--                                <el-option label="12年" value="12"></el-option>-->
<!--                                <el-option label="11年" value="11"></el-option>-->
<!--                                <el-option label="10年" value="10"></el-option>-->
<!--                                <el-option label="9年" value="9"></el-option>-->
<!--                                <el-option label="8年" value="8"></el-option>-->
<!--                                <el-option label="7年" value="7"></el-option>-->
<!--                                <el-option label="6年" value="6"></el-option>-->
<!--                                <el-option label="5年" value="5"></el-option>-->
<!--                                <el-option label="4年" value="4"></el-option>-->
<!--                                <el-option label="3年" value="3"></el-option>-->
<!--                                <el-option label="2年" value="2"></el-option>-->
<!--                                <el-option label="1年" value="1"></el-option>-->

<!--                            </el-select>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item>-->
<!--                            <el-button type="success" @click="onSubmit" class="cbtn-bg">开始计算</el-button>-->
<!--                        </el-form-item>-->
<!--                    </el-form>-->
<!--                </el-col>-->

<!--                <el-col :span="2">-->
<!--                    <el-card class="box-card" style="width: 500px">-->
<!--                        <div slot="header" class="clearfix">-->
<!--                            <el-row>-->
<!--                                <el-col :span="6">类型</el-col>-->
<!--                                <el-col :span="6">等额本息还款</el-col>-->
<!--                                <el-col :span="6">等额本金还款</el-col>-->
<!--                            </el-row>-->
<!--                        </div>-->
<!--                        <el-row class="crow">-->
<!--                            <el-col :span="6">月供</el-col>-->
<!--                            <el-col :span="6">0元</el-col>-->
<!--                            <el-col :span="6">0元</el-col>-->
<!--                        </el-row>-->

<!--                        <el-row class="crow">-->
<!--                            <el-col :span="6">贷款年限</el-col>-->
<!--                            <el-col :span="6">0年</el-col>-->
<!--                            <el-col :span="6">0年</el-col>-->
<!--                        </el-row>-->

<!--                        <el-row class="crow">-->
<!--                            <el-col :span="6">贷款总额</el-col>-->
<!--                            <el-col :span="6">0万元</el-col>-->
<!--                            <el-col :span="6">0万元</el-col>-->
<!--                        </el-row>-->

<!--                        <el-row class="crow">-->
<!--                            <el-col :span="6">利息总额</el-col>-->
<!--                            <el-col :span="6">0万元</el-col>-->
<!--                            <el-col :span="6">0万元</el-col>-->
<!--                        </el-row>-->

<!--                        <el-row class="crow">-->
<!--                            <el-col :span="6">还款总额</el-col>-->
<!--                            <el-col :span="6">0万元</el-col>-->
<!--                            <el-col :span="6">0万元</el-col>-->
<!--                        </el-row>-->
<!--                    </el-card>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--        </el-tab-pane>-->

<!--        <el-tab-pane label="新房税费计算器" name="second">-->
<!--            el-row style="padding-top: 20px" :gutter="40">-->
<!--            <el-col :span="12">-->
<!--                <el-form ref="form" :model="form" label-width="80px">-->
<!--                    <el-form-item label="贷款类型">-->
<!--                        <el-select v-model="form.input1" placeholder="商业贷款">-->
<!--                            <el-option label="商业贷款" value="商业贷款"></el-option>-->
<!--                            <el-option label="公积金贷款" value="公积金贷款"></el-option>-->
<!--                            <el-option label="组合贷款" value="组合贷款"></el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="计算方式">-->
<!--                        <el-select v-model="form.input2" placeholder="按货款总额">-->
<!--                            <el-option label="按货款总额" value="按货款总额"></el-option>-->
<!--                            <el-option label="按房屋总价" value="按房屋总价"></el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="商贷金额" >-->
<!--                        <el-input style="width: 300px" type="text" v-model="form.desc1"  placeholder="请输入大于0的数字">-->
<!--                            <template slot="append">万元</template>-->
<!--                        </el-input>-->

<!--                    </el-form-item>-->
<!--                    <el-form-item label="商贷利率方式">-->
<!--                        <el-select v-model="form.input3" placeholder="按最新LPR">-->
<!--                            <el-option label="按最新LPR" value="按最新LPR"></el-option>-->
<!--                            <el-option label="按旧版基准利率" value="按旧版基准利率"></el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="LPR">-->
<!--                        <el-button type="text" @click="open">-->
<!--                            <i class="el-icon-info"></i>-->
<!--                        </el-button>-->
<!--                        <el-input style="width:350px" type="number" v-model="form.desc2" placeholder="请输入中国人民银行网站公布的最新LPR" >-->
<!--                            <template slot="append">%</template>-->
<!--                        </el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="基点">-->
<!--                        <el-input style="width: 300px" type="number" v-model="form.desc3">-->
<!--                            <template slot="append">BP(‱)</template>-->
<!--                        </el-input>-->
<!--                    </el-form-item>-->

<!--                    <el-form-item label="商贷利率" placeholder="4.65">-->
<!--                        <el-input style="width: 300px" type="text" v-model="form.desc4"></el-input>-->
<!--                    </el-form-item>-->

<!--                    <el-form-item label="商贷年限">-->
<!--                        <el-select v-model="form.input4" placeholder="10年">-->
<!--                            <el-option label="30年" value="30"></el-option>-->
<!--                            <el-option label="29年" value="29"></el-option>-->
<!--                            <el-option label="28年" value="28"></el-option>-->
<!--                            <el-option label="27年" value="27"></el-option>-->
<!--                            <el-option label="26年" value="26"></el-option>-->
<!--                            <el-option label="25年" value="25"></el-option>-->
<!--                            <el-option label="24年" value="24"></el-option>-->
<!--                            <el-option label="23年" value="23"></el-option>-->
<!--                            <el-option label="22年" value="22"></el-option>-->
<!--                            <el-option label="21年" value="21"></el-option>-->
<!--                            <el-option label="20年" value="20"></el-option>-->
<!--                            <el-option label="19年" value="19"></el-option>-->
<!--                            <el-option label="18年" value="18"></el-option>-->
<!--                            <el-option label="17年" value="17"></el-option>-->
<!--                            <el-option label="16年" value="16"></el-option>-->
<!--                            <el-option label="15年" value="15"></el-option>-->
<!--                            <el-option label="14年" value="14"></el-option>-->
<!--                            <el-option label="13年" value="13"></el-option>-->
<!--                            <el-option label="12年" value="12"></el-option>-->
<!--                            <el-option label="11年" value="11"></el-option>-->
<!--                            <el-option label="10年" value="10"></el-option>-->
<!--                            <el-option label="9年" value="9"></el-option>-->
<!--                            <el-option label="8年" value="8"></el-option>-->
<!--                            <el-option label="7年" value="7"></el-option>-->
<!--                            <el-option label="6年" value="6"></el-option>-->
<!--                            <el-option label="5年" value="5"></el-option>-->
<!--                            <el-option label="4年" value="4"></el-option>-->
<!--                            <el-option label="3年" value="3"></el-option>-->
<!--                            <el-option label="2年" value="2"></el-option>-->
<!--                            <el-option label="1年" value="1"></el-option>-->

<!--                        </el-select>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item>-->
<!--                        <el-button type="success" @click="onSubmit" class="cbtn-bg">开始计算</el-button>-->
<!--                    </el-form-item>-->
<!--                </el-form>-->
<!--            </el-col>-->

<!--            <el-col :span="2">-->
<!--                <el-card class="box-card" style="width: 500px">-->
<!--                    <div slot="header" class="clearfix">-->
<!--                        <el-row>-->
<!--                            <el-col :span="6">类型</el-col>-->
<!--                            <el-col :span="6">等额本息还款</el-col>-->
<!--                            <el-col :span="6">等额本金还款</el-col>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                    <el-row class="crow">-->
<!--                        <el-col :span="6">月供</el-col>-->
<!--                        <el-col :span="6">0元</el-col>-->
<!--                        <el-col :span="6">0元</el-col>-->
<!--                    </el-row>-->

<!--                    <el-row class="crow">-->
<!--                        <el-col :span="6">贷款年限</el-col>-->
<!--                        <el-col :span="6">0年</el-col>-->
<!--                        <el-col :span="6">0年</el-col>-->
<!--                    </el-row>-->

<!--                    <el-row class="crow">-->
<!--                        <el-col :span="6">贷款总额</el-col>-->
<!--                        <el-col :span="6">0万元</el-col>-->
<!--                        <el-col :span="6">0万元</el-col>-->
<!--                    </el-row>-->

<!--                    <el-row class="crow">-->
<!--                        <el-col :span="6">利息总额</el-col>-->
<!--                        <el-col :span="6">0万元</el-col>-->
<!--                        <el-col :span="6">0万元</el-col>-->
<!--                    </el-row>-->

<!--                    <el-row class="crow">-->
<!--                        <el-col :span="6">还款总额</el-col>-->
<!--                        <el-col :span="6">0万元</el-col>-->
<!--                        <el-col :span="6">0万元</el-col>-->
<!--                    </el-row>-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--        </el-tab-pane>-->
<!--        <el-tab-pane label="购房资质查询" name="third">-->
<!--        </el-tab-pane>-->
<!--    </el-tabs>-->

<!--        -->
        <div class="header">
            <div class="container">
                <div class="logo">
                    <a href="http://www.fangdaijisuanqi.net/"><img src="http://www.fangdaijisuanqi.net/content/templates/fangdaijisuanqi/images/logo.png" title="房贷计算器"></a>
                </div>
            </div>
        </div>
        <div class="container"><div class="calculator">

            <div view="calc_input" style="display:block;">

                <div class="ui-bar" skin="title">

                    <at class="title">

                        房贷计算器
                    </at>

                </div>

                <nav class="switch-tabs big-switch-tabs">

                    <ul>

                        <li id="business_calc" class="tab select-tab">

                            <a href="javascript:void(0)">商业贷款计算器</a>

                        </li>

                        <li id="PAF_calc" class="tab normal-tab">

                            <a href="javascript:void(0)">公积金贷款计算器</a>

                        </li>

                        <li id="mix_calc" class="tab normal-tab">

                            <a href="javascript:void(0)">组合贷款计算器</a>

                        </li>

                    </ul>

                </nav>

                <div class="input-fields" wrap="h10">

                    <ul>

                        <li id="business_sum_line" class="field-wrap"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">

                            <label>商业贷款</label>

                            <div class="field">

                                <div class="ui-text" data-tail="万元">

                                    <input type="number" id="business_sum" value="100"></div>

                            </div>

                        </li>

                        <li id="PAF_sum_line" class="field-wrap"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">

                            <label>公积金贷款</label>

                            <div class="field">

                                <div class="ui-text" data-tail="万元">

                                    <input type="number" id="PAF_sum" value="80"></div>

                            </div>

                        </li>

                        <li class="field-wrap">

                            <label>贷款期限</label>

                            <div class="field">

                                <div class="ui-select">

                                    <div class="value-bar">

                                        <span id="loan_period_select_bar" class="text" value="20">20年（240期）</span>

                                        <span class="icon-sps tail-icon"></span>

                                    </div>

                                    <select id="loan_period_select">

                                        <option value="0">半年（6期）</option>

                                        <option value="1">1年（12期）</option>

                                        <option value="2">2年（24期）</option>

                                        <option value="3">3年（36期）</option>

                                        <option value="4">4年（48期）</option>

                                        <option value="5">5年（60期）</option>

                                        <option value="6">6年（72期）</option>

                                        <option value="7">7年（84期）</option>

                                        <option value="8">8年（96期）</option>

                                        <option value="9">9年（108期）</option>

                                        <option value="10">10年（120期）</option>

                                        <option value="11">11年（132期）</option>

                                        <option value="12">12年（144期）</option>

                                        <option value="13">13年（156期）</option>

                                        <option value="14">14年（168期）</option>

                                        <option value="15">15年（180期）</option>

                                        <option value="16">16年（192期）</option>

                                        <option value="17">17年（204期）</option>

                                        <option value="18">18年（216期）</option>

                                        <option value="19">19年（228期）</option>

                                        <option value="20" selected="selected">20年（240期）</option>

                                        <option value="21">21年（252期）</option>

                                        <option value="22">22年（264期）</option>

                                        <option value="23">23年（276期）</option>

                                        <option value="24">24年（288期）</option>

                                        <option value="25">25年（300期）</option>

                                        <option value="26">26年（312期）</option>

                                        <option value="27">27年（324期）</option>

                                        <option value="28">28年（336期）</option>

                                        <option value="29">29年（348期）</option>

                                        <option value="30">30年（360期）</option>

                                    </select>

                                </div>

                            </div>

                        </li>

                        <li id="business_rate_select_line" class="field-wrap"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">

                            <label>商贷利率</label>

                            <div class="field mid-field">

                                <label class="repay-method">

                                    <input type="radio" name="repayTypeS" id="repay_radio_s1" value="1"
                                           checked="checked">&nbsp;2019原利率模式</label>

                            </div>

                            <div class="field mid-field">

                                <label class="repay-method">

                                    <input type="radio" name="repayTypeS" id="repay_radio_s2" value="2">&nbsp;2020年LPR+基点利率模式</label>
                            </div>
                        </li>

                        <li class="field-wrap" id="business_rate_select_1">
                            <label></label>

                            <div class="field long-field" id="business_rate_select_field">

                                <div class="ui-select">

                                    <div class="value-bar">

                                        <span id="business_rate_select_bar" class="text" value="12">最新基准利率</span>

                                        <span class="icon-sps tail-icon"></span>

                                    </div>

                                    <select id="business_rate_select" input-method="auto">

                                        <option value="-1">手动输入</option>

                                        <option value="12" data-key="18-01-01" selected="selected">最新基准利率</option>

                                    </select>

                                </div>

                            </div>

                            <div class="field short-field" id="business_discount_field">

                                <div class="ui-select">

                                    <div class="value-bar">

                                        <span id="business_discount_bar" class="text" data-discount="1.0">无折扣</span>

                                        <span class="icon-sps tail-icon"></span>

                                    </div>

                                    <select id="business_discount">

                                        <option value="0" data-discount="1.0" selected="selected">无折扣</option>

                                        <option value="10" data-discount="1.2">1.2倍</option>

                                        <option value="9" data-discount="1.15">1.15倍</option>

                                        <option value="8" data-discount="1.1">1.1倍</option>

                                        <option value="7" data-discount="1.05">1.05倍</option>

                                        <option value="6" data-discount="0.95">95折</option>

                                        <option value="5" data-discount="0.9">9折</option>

                                        <option value="4" data-discount="0.85">85折</option>

                                        <option value="3" data-discount="0.8">8折</option>

                                        <option value="2" data-discount="0.75">75折</option>

                                        <option value="1" data-discount="0.7">7折</option>

                                    </select>

                                </div>

                            </div>
                        </li>

                        <li id="business_rate_select_2" class="field-wrap" style="display:none">

                            <label></label>

                            <div class="field long-field" id="business_LPR_field">

                                <div class="ui-text" data-tail="%">
                                    LPR
                                    <input id="business_LPR" name="business_LPR" value=""/>
                                </div>

                            </div>

                            <div class="field short-field" id="business_BP_field">

                                <div class="ui-text">
                                    <span>+</span>BP <input id="business_BP" name="business_BP" value=""/>
                                </div>

                            </div>

                        </li>


                        <li id="business_rate_value_line" class="field-wrap"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">

                            <label></label>

                            <div class="field">

                                <div class="ui-text rate-text" data-tail="%">

                                    <input type="number" id="business_rate" value="4.9"></div>

                            </div>

                        </li>

                        <li id="PAF_rate_line" class="field-wrap"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">

                            <label>公积金利率</label>

                            <div class="field long-field">

                                <div class="ui-select">

                                    <div class="value-bar">

                                        <span id="PAF_rate_select_bar" class="text" value="12">最新基准利率</span>

                                        <span class="icon-sps tail-icon"></span>

                                    </div>

                                    <select id="PAF_rate_select" input-method="auto">

                                        <option value="-1">手动输入</option>

                                        <option value="12" data-key="18-01-01" selected="selected">最新基准利率</option>

                                    </select>

                                </div>

                            </div>

                            <div class="field short-field">

                                <div class="ui-text" data-tail="%">

                                    <input type="number" id="PAF_rate" value="3.25"></div>

                            </div>

                        </li>

                        <li class="field-wrap">

                            <label>还款方式</label>

                            <div class="field mid-field">

                                <label class="repay-method">

                                    <input type="radio" name="repayType" id="repay_radio1" value="1" checked="checked">&nbsp;等额本息</label>

                            </div>

                            <div class="field mid-field">

                                <label class="repay-method">

                                    <input type="radio" name="repayType" id="repay_radio2" value="2">&nbsp;等额本金</label>

                            </div>

                        </li>

                    </ul>

                    <div class="calbtn-wrap">

                        <a id="calculate" class="ui-btn" skin="blue full">计&nbsp;算</a>

                    </div>

                </div>

                <div wrap="t15">

                    <div id="business_atc_recmd_mod"
                         style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
                    </div>

                </div>

                <div id="PAF_atc_recmd_mod" class="hide"
                     style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">
                </div>
            </div>


            <div class="calc-result hide" view="calc_result" style="min-height:800px">

                <header class="ui-bar" skin="title">

                    <h1 class="title">计算结果</h1>

                    <div class="left">

                        <a id="back_to_calc_input" class="ui-btn" skin="mini back" wrap="t5">返回</a>

                    </div>

                </header>

                <nav class="switch-tabs">

                    <ul>

                        <li id="result_tab_1" class="result-tab normal-tab" tab-id="1">

                            <a href="javascript:void(0)">等额本息</a>

                        </li>

                        <li id="result_tab_2" class="result-tab normal-tab" tab-id="2">

                            <a href="javascript:void(0)">等额本金</a>

                        </li>

                    </ul>

                </nav>

                <div id="result_data_1" class="result-data hide">

                    <ul class="result-list">

                        <li class="group-tit">还款数据摘要</li>

                        <li id="business_interest_total_debx" class="hide"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">

                            <div class="item-name">商贷利息</div>

                            <div id="business_interest_total_1" class="item-value"></div>

                        </li>

                        <li id="PAF_interest_total_debx" class="hide"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">

                            <div class="item-name">公积金利息</div>

                            <div id="PAF_interest_total_1" class="item-value"></div>

                        </li>

                        <li>

                            <div class="item-name">利息总额</div>

                            <div id="interest_total_1" class="item-value"></div>

                        </li>

                        <li>

                            <div class="item-name">累计还款总额</div>

                            <div id="repay_total_1" class="item-value"></div>

                        </li>

                        <li>

                            <div class="item-name">每月月供</div>

                            <div id="repay_monthly_1" class="item-value"></div>

                        </li>

                        <li>

                            <div class="item-name">最高月付利息</div>

                            <div id="interest_monthly_1" class="item-value"></div>

                        </li>

                    </ul>

                    <div class="data-container wid2 clear">

                        <div class="group-tit">还款数据明细</div>

                        <table class="data-table table-striped">

                            <thead>

                            <tr>

                                <th>期次</th>

                                <th>偿还本息</th>

                                <th>偿还利息</th>

                                <th>偿还本金</th>

                                <th>剩余本金</th>

                            </tr>

                            </thead>

                            <tbody id="simple_data_table_1"></tbody>

                        </table>

                        <div class="view-more" data-detail="1">

                            <div class="detail">

                                <p class="txt">查看更多数据...</p>

                            </div>

                            <i data-icon="&gt;"></i>

                        </div>

                    </div>

                </div>

                <div id="result_data_2" class="result-data hide">

                    <ul class="result-list">

                        <li class="group-tit">还款数据摘要</li>

                        <li id="business_interest_total_debj" class="hide"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">

                            <div class="item-name">商贷利息</div>

                            <div id="business_interest_total_2" class="item-value"></div>

                        </li>

                        <li id="PAF_interest_total_debj" class="hide"
                            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">

                            <div class="item-name">公积金利息</div>

                            <div id="PAF_interest_total_2" class="item-value"></div>

                        </li>

                        <li>

                            <div class="item-name">利息总额</div>

                            <div id="interest_total_2" class="item-value"></div>

                        </li>

                        <li>

                            <div class="item-name">累计还款总额</div>

                            <div id="repay_total_2" class="item-value"></div>

                        </li>

                        <li>

                            <div class="item-name">最高月供</div>

                            <div id="repay_monthly_2" class="item-value"></div>

                        </li>

                        <li>

                            <div class="item-name">最高月付利息</div>

                            <div id="interest_monthly_2" class="item-value"></div>

                        </li>

                    </ul>

                    <div class="data-container wid2 clear">

                        <div class="group-tit">还款数据明细</div>

                        <table class="data-table table-striped">

                            <thead>

                            <tr>

                                <th>期次</th>

                                <th>偿还本息</th>

                                <th>偿还利息</th>

                                <th>偿还本金</th>

                                <th>剩余本金</th>

                            </tr>

                            </thead>

                            <tbody id="simple_data_table_2"></tbody>

                        </table>

                        <div class="view-more" data-detail="2">

                            <div class="detail">

                                <p class="txt">查看更多数据...</p>

                            </div>

                            <i data-icon="&gt;"></i>

                        </div>

                    </div>

                </div>

                <div class="recal-btn" wrap="h10">

                    <a id="recalculate" class="ui-btn" skin="blue full">重新计算</a>

                </div>

                <div wrap="t15">

                    <div id="repay_atc_recmd_mod">


                    </div>

                </div>

            </div>

            <div id="data_detail_bar" class="ui-bar-fixed hide">

                <header class="ui-bar" skin="title">

                    <h1 class="title">数据明细</h1>

                    <div class="left">

                        <a id="back_to_calc_result" class="ui-btn" skin="mini back" wrap="t5">返回</a>

                    </div>

                </header>

            </div>

            <div class="data-detail hide" view="data_detail">

                <div id="data_detail_1" class="data-container wid2 clear hide">

                    <table class="data-table table-striped">

                        <thead>

                        <tr>

                            <th>期次</th>

                            <th>偿还本息</th>

                            <th>偿还利息</th>

                            <th>偿还本金</th>

                            <th>剩余本金</th>

                        </tr>

                        </thead>

                        <tbody id="standard_data_table_1"></tbody>

                    </table>

                </div>

                <div id="data_detail_2" class="data-container wid2 clear hide">

                    <table class="data-table table-striped">

                        <thead>

                        <tr>

                            <th>期次</th>

                            <th>偿还本息</th>

                            <th>偿还利息</th>

                            <th>偿还本金</th>

                            <th>剩余本金</th>

                        </tr>

                        </thead>

                        <tbody id="standard_data_table_2"></tbody>

                    </table>

                </div>

            </div>
        </div>
            <div class="side">
                <h3 class="title">房贷新闻</h3>
                <div class="ui-list">
                    <a class="list-item" href="http://www.fangdaijisuanqi.net/?post=13">
                        <div class="detail" doc="desc">
                            <p class="atc-title">LPR利率是多少?</p>
                        </div> <i data-icon="&gt;"></i>
                    </a>
                    <a class="list-item" href="http://www.fangdaijisuanqi.net/?post=12">
                        <div class="detail" doc="desc">
                            <p class="atc-title">2020年房价是涨还是跌?</p>
                        </div> <i data-icon="&gt;"></i>
                    </a>
                    <a class="list-item" href="http://www.fangdaijisuanqi.net/?post=11">
                        <div class="detail" doc="desc">
                            <p class="atc-title">个人住房贷款调整新规2020</p>
                        </div> <i data-icon="&gt;"></i>
                    </a>
                    <a class="list-item" href="http://www.fangdaijisuanqi.net/?post=10">
                        <div class="detail" doc="desc">
                            <p class="atc-title">2020银行停贷最新消息</p>
                        </div> <i data-icon="&gt;"></i>
                    </a>
                    <a class="list-item" href="http://www.fangdaijisuanqi.net/?post=9">
                        <div class="detail" doc="desc">
                            <p class="atc-title">2020年房价是涨还是跌?</p>
                        </div> <i data-icon="&gt;"></i>
                    </a>
                </div>

                <h3 class="title">友情链接</h3>
                <div class="links">
                </div>
            </div>



        </div>

<!--        <div class="footer">-->

<!--            &copy; copyright by <a href="http://www.fangdaijisuanqi.net/">房贷计算器</a>-->

<!--            浙ICP备10010456号 <script>-->
<!--            var _hmt = _hmt || [];-->
<!--            (function() {-->
<!--                var hm = document.createElement("script");-->
<!--                hm.src = "https://hm.baidu.com/hm.js?8f3285931efeb5ec55df7bb59ab2021b";-->
<!--                var s = document.getElementsByTagName("script")[0];-->
<!--                s.parentNode.insertBefore(hm, s);-->
<!--            })();-->
<!--        </script>-->

<!--        </div>-->
        <my-footer></my-footer>
    </div>
</template>
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.fangdaijisuanqi.net/xmlrpc.php?rsd">
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://www.fangdaijisuanqi.net/wlwmanifest.xml" >
<link rel="alternate" type="application/rss+xml" title="RSS"  href="http://www.fangdaijisuanqi.net/rss.php" >

<!--<script type="text/javascript" src="http://www.fangdaijisuanqi.net/content/templates/fangdaijisuanqi/js/zepto.min.js">-->
<!--<script type="text/javascript" src="http://www.fangdaijisuanqi.net/content/templates/fangdaijisuanqi/js/houseloan_calculator.js">-->
<!--<script src="http://www.fangdaijisuanqi.net/include/lib/js/common_tpl.js" type="text/javascript">-->
<script type="text/javascript">
    import MyHeader from "@/components/common/MyHeader.vue";
    import MyFooter from "@/components/common/MyFooter.vue";
    export default {
        name: "calculator",
        data () {
            return {
                form: {
                    name: '',
                    input1:'',
                    input2:'',
                    input3:'',
                    input4:'',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc4: '',
                    desc1: '',
                    desc2: '',
                    desc3: '',
                },
                activeName: 'first'
            }
        },

        methods: {
            onSubmit() {
                console.log('submit!');
            },
            open() {
                this.$alert('自2019年10月8日起，新发放的商业住房贷款的贷款利率由“贷款基准利率（4.9%）”转换为“贷款款市场报价利率（LPR）”在LPR的基础上增加基点来确定最终的商贷利率； LPR每月20日（遇节假日顺延）报价一次，可在中国人民银行网站查询。', 'LPR（贷款市场报价利率）',
                    {
                        confirmButtonText: '确定',
                    });
            }
        },

        components:{
            MyHeader,
            MyFooter,
        },
    }
</script>

