<template>
    <div class="outer1">
        <div class="container">
            <div class="title">{{ t('settings.title') }}</div>
            <div class="settings">
                <span class="sub-title">
                    {{ t('settings.dataSources.title') }}
                    <el-popover
                        placement="top"
                        :width="300"
                        trigger="hover"
                    >
                        <template #reference>
                            <question-filled width="1em" height="1em" />
                        </template>
                        <strong>
                            <p>{{ t('settings.popover.needReloadPage') }}</p>
                        </strong>
                    </el-popover>
                </span>
                <div class="group">
                    <div class="switch-group">
                        <span class="font-bold w-full">{{ t('settings.dataSources.eew.title') }}</span>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eew.cea') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.ceaEew" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full" v-if="settingsStore.advancedSettings.enableIclEew">
                            <div>{{ t('settings.dataSources.eew.icl') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.iclEew" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eew.sc') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.scEew" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eew.fj') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.fjEew" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eew.cwa') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.cwaEew" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eew.jma') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.jmaEew" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eew.kma') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.kmaEew" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full" v-if="settingsStore.advancedSettings.enableGqEew">
                            <div>{{ t('settings.dataSources.eew.gq') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.gqEew" @change="handleNeedReload" />
                        </div>
                    </div>
                    <div class="switch-group">
                        <span class="font-bold w-full">{{ t('settings.dataSources.eqlist.title') }}</span>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eqlist.cenc') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.cencEqlist" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eqlist.cwa') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.cwaEqlist" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eqlist.jma') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.jmaEqlist" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eqlist.kma') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.kmaEqlist" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eqlist.usgs') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.usgsEqlist" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.eqlist.fssn') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.fssnEqlist" @change="handleFssnEqlist" />
                        </div>
                    </div>
                    <div class="switch-group">
                        <span class="font-bold w-full">{{ t('settings.dataSources.tsunami.title') }}</span>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.tsunami.nmefc') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.nmefcTsunami" @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <div>{{ t('settings.dataSources.tsunami.jma') }}</div>
                            <el-switch v-model="settingsStore.mainSettings.source.jmaTsunami" @change="handleNeedReload" />
                        </div>
                    </div>
                </div>
                <span class="sub-title">{{ t('settings.monitoring.title') }}</span>
                <div class="group">
                    <span class="font-bold w-full">{{ t('settings.monitoring.dataSource') }}</span>
                    <div class="switch-group">
                        <div class="w-full">
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.nied') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.niedNet" :disabled="statusStore.isNiedUpdating" />
                            </div>
                            <div class="switch-full pl-4">
                                <span>{{ t('settings.monitoring.parseShindo') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.displayNiedShindo" :disabled="!settingsStore.mainSettings.displaySeisNet.niedNet" />
                            </div>
                            <div class="switch-full pl-4">
                                <span>
                                    {{ t('settings.monitoring.detectionSensitivity') }}
                                    <el-popover
                                        placement="top"
                                        :width="300"
                                        trigger="hover"
                                    >
                                        <template #reference>
                                            <question-filled width="1em" height="1em" />
                                        </template>
                                        <p>{{ t('settings.monitoring.sensitivityDesc') }}</p>
                                    </el-popover>
                                </span>
                                <el-select
                                    v-model="settingsStore.mainSettings.displaySeisNet.niedSensitivity"
                                    size="small"
                                    :disabled="!settingsStore.mainSettings.displaySeisNet.niedNet"
                                    style="width: 72px;"
                                >
                                    <el-option :label="t('settings.monitoring.sensitivityOff')" :value=0 />
                                    <el-option :label="t('settings.monitoring.sensitivityStandard')" :value=1 />
                                    <el-option :label="t('settings.monitoring.sensitivityHigh')" :value=2 />
                                    <el-option :label="t('settings.monitoring.sensitivityVeryHigh')" :value=3 />
                                </el-select>
                            </div>
                            <div class="switch-full pl-4">
                                <span>
                                    {{ t('settings.monitoring.localHypocenter') }}
                                    <el-popover
                                        placement="top"
                                        :width="310"
                                        trigger="hover"
                                    >
                                        <template #reference>
                                            <question-filled width="1em" height="1em" />
                                        </template>
                                        <p>{{ t('settings.monitoring.hypoDesc1') }}</p>
                                        <strong>
                                            <p>{{ t('settings.monitoring.hypoDesc2') }}</p>
                                            <p>{{ t('settings.monitoring.hypoDesc3') }}</p>
                                            <p>{{ t('settings.monitoring.hypoDesc4') }}</p>
                                        </strong>
                                    </el-popover>
                                </span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.niedHypoInf" :disabled="!settingsStore.mainSettings.displaySeisNet.niedNet" />
                            </div>
                            <div class="switch-full pl-8">
                                <span>{{ t('settings.monitoring.autoHideHypo') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.niedHypoInfAlwaysOn" :disabled="!settingsStore.mainSettings.displaySeisNet.niedNet || !settingsStore.mainSettings.displaySeisNet.niedHypoInf" />
                            </div>
                            <div class="switch-full pl-8">
                                <span>{{ t('settings.monitoring.hypoTextInfo') }}</span>
                                <el-select
                                    v-model="settingsStore.mainSettings.displaySeisNet.niedHypoInfTextInfo"
                                    size="small"
                                    :disabled="!settingsStore.mainSettings.displaySeisNet.niedNet || !settingsStore.mainSettings.displaySeisNet.niedHypoInf"
                                    style="width: 72px;"
                                >
                                    <el-option :label="t('settings.monitoring.hypoTextOff')" :value="0" />
                                    <el-option :label="t('settings.monitoring.hypoTextOn')" :value="1" />
                                    <el-option :label="t('settings.monitoring.hypoTextDetail')" :value="2" v-show="settingsStore.advancedSettings.advancedHypoInf" />
                                </el-select>
                            </div>
                        </div>
                        <div class="w-full" v-if="settingsStore.advancedSettings.enableTremFunctions">
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.trem') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.tremNet" />
                            </div>
                            <div class="switch-full pl-4">
                                <span>{{ t('settings.monitoring.parseShindo') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.displayTremShindo" :disabled="!settingsStore.mainSettings.displaySeisNet.tremNet" />
                            </div>
                            <div class="switch-full pl-4">
                                <span>{{ t('settings.monitoring.api') }}</span>
                                <el-select
                                    v-model="settingsStore.mainSettings.displaySeisNet.tremApi"
                                    size="small"
                                    :disabled="!settingsStore.mainSettings.displaySeisNet.tremNet"
                                    style="width: 72px;"
                                >
                                    <el-option label="api-1" value="api-1" />
                                    <el-option label="api-2" value="api-2" />
                                    <el-option label="lb-1" value="lb-1" />
                                    <el-option label="lb-2" value="lb-2" />
                                    <el-option label="lb-3" value="lb-3" />
                                    <el-option label="lb-4" value="lb-4" />
                                </el-select>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.kma') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.kmaNet" />
                            </div>
                            <div class="switch-full pl-4">
                                <span>{{ t('settings.monitoring.convertToMmi') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.displayKmaInt" :disabled="!settingsStore.mainSettings.displaySeisNet.kmaNet" />
                            </div>
                            <div class="switch-full pl-4">
                                <span>
                                    {{ t('settings.monitoring.detectionSensitivity') }}
                                    <el-popover
                                        placement="top"
                                        :width="300"
                                        trigger="hover"
                                    >
                                        <template #reference>
                                            <question-filled width="1em" height="1em" />
                                        </template>
                                        <p>{{ t('settings.monitoring.sensitivityDesc') }}</p>
                                    </el-popover>
                                </span>
                                <el-select
                                    v-model="settingsStore.mainSettings.displaySeisNet.kmaSensitivity"
                                    size="small"
                                    :disabled="!settingsStore.mainSettings.displaySeisNet.kmaNet"
                                    style="width: 72px;"
                                >
                                    <el-option :label="t('settings.monitoring.sensitivityOff')" :value=0 />
                                    <el-option :label="t('settings.monitoring.sensitivityStandard')" :value=1 />
                                    <el-option :label="t('settings.monitoring.sensitivityHigh')" :value=2 />
                                    <el-option :label="t('settings.monitoring.sensitivityVeryHigh')" :value=3 />
                                </el-select>
                            </div>
                            <div class="switch-full pl-4">
                                <span>{{ t('settings.monitoring.accelerationHold') }}</span>
                                <el-select
                                    v-model="settingsStore.mainSettings.displaySeisNet.kmaIntHold"
                                    size="small"
                                    :disabled="!settingsStore.mainSettings.displaySeisNet.kmaNet"
                                    style="width: 72px;"
                                >
                                    <el-option :label="t('settings.monitoring.realtime')" :value="1" />
                                    <el-option :label="t('settings.monitoring.hold5s')" :value="5" />
                                    <el-option :label="t('settings.monitoring.hold10s')" :value="10" />
                                    <el-option :label="t('settings.monitoring.hold30s')" :value="30" />
                                    <el-option :label="t('settings.monitoring.hold60s')" :value="60" />
                                </el-select>
                            </div>
                        </div>
                    </div>
                    <div class="font-bold w-full">{{ t('settings.monitoring.general') }}</div>
                    <div class="switch-group">
                        <div class="w-full">
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.stationReplay') }}</span>
                                <div class="flex gap-2">
                                    <el-input-number
                                        v-model="settingsStore.mainSettings.displaySeisNet.delay"
                                        size="small"
                                        :min="0"
                                        style="width: 108px;"
                                    />
                                    <el-button
                                        size="small"
                                        @click="settingsStore.mainSettings.displaySeisNet.delay = 0"
                                        :disabled="settingsStore.mainSettings.displaySeisNet.delay == 0"
                                    >{{ t('settings.monitoring.reset') }}</el-button>
                                </div>
                            </div>
                            <div class="switch-full pl-4">
                                <span>{{ t('settings.monitoring.selectReplayTime') }}</span>
                                <div class="flex gap-2">
                                    <el-date-picker
                                        v-model="replayDateTime"
                                        type="datetime"
                                        size="small"
                                        style="width: 156px;"
                                        :placeholder="t('settings.monitoring.placeholderDateTime')"
                                        format="YYYY-MM-DD HH:mm:ss"
                                        value-format="YYYY-MM-DD HH:mm:ss"
                                    />
                                    <el-button
                                        size="small"
                                        @click="setReplayDateTime"
                                        :disabled="!replayDateTime"
                                    >{{ t('settings.monitoring.replay') }}</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.stationStyle') }}</span>
                                <el-select
                                    style="width: 72px;"
                                    v-model="settingsStore.mainSettings.displaySeisNet.style"
                                    size="small"
                                >
                                    <el-option :label="t('settings.monitoring.styleNied')" value="nied" />
                                    <el-option :label="t('settings.monitoring.styleSrev')" value="srev" />
                                    <el-option :label="t('settings.monitoring.styleMix')" value="mix" />
                                </el-select>
                            </div>
                            <div class="switch-full pl-4" v-show="settingsStore.mainSettings.displaySeisNet.style == 'nied'">
                                <span>{{ t('settings.monitoring.hideNoData') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.hideNoData" />
                            </div>
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.showShindo0') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.displayShindo0" />
                            </div>
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.autoHideShake') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.alwaysDisplayGrid" />
                            </div>
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.showMaxRealtime') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.displayMaxInt" />
                            </div>
                            <div class="switch-full">
                                <span>{{ t('settings.monitoring.showMaxInterval') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displaySeisNet.displayPeriodMaxInt" />
                            </div>
                        </div>
                    </div>
                </div>
                <span class="sub-title">{{ t('settings.behavior.title') }}</span>
                <div class="group">
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>
                                {{ t('settings.behavior.gameMode') }}
                                <el-popover
                                    placement="top"
                                    :width="280"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.behavior.gameModeDesc') }}</p>
                                    <p v-if="isTauri">{{ t('settings.behavior.gameModeTrayDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-switch v-model="settingsStore.mainSettings.gameMode" />
                        </div>
                    </div>
                    <span class="font-bold w-full">
                        {{ t('settings.behavior.filter.title') }}
                        <el-popover
                            placement="top"
                            :width="200"
                            trigger="hover"
                        >
                            <template #reference>
                                <question-filled width="1em" height="1em" />
                            </template>
                            <p><strong>{{ t('settings.behavior.filter.filterAnd') }}</strong></p>
                            <p><strong>{{ t('settings.behavior.filter.filterFromNext') }}</strong></p>
                        </el-popover>
                    </span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <div class="justify-between" style="width: 10rem;">
                                <span>
                                    {{ t('settings.behavior.filter.magThreshold') }}
                                    <el-popover
                                        placement="top"
                                        :width="310"
                                        trigger="hover"
                                    >
                                        <template #reference>
                                            <question-filled width="1em" height="1em" />
                                        </template>
                                        <p>{{ t('settings.behavior.filter.magThresholdDesc') }}</p>
                                    </el-popover>
                                </span>
                                <div class="mag" :class="setClassName(calcCsisLevel(settingsStore.mainSettings.actionMag, 10, 0), false)">
                                    {{ settingsStore.mainSettings.actionMag.toFixed(1) }}
                                </div>
                            </div>
                            <el-slider
                                v-model="settingsStore.mainSettings.actionMag"
                                :min="0" :max="9"
                                :step="0.1"
                                size="small"
                            />
                        </div>
                        <div class="switch-full" v-if="!settingsStore.nearestJmaLoc">
                            <div class="justify-between" style="width: 10rem;">
                                <span>
                                    {{ t('settings.behavior.filter.localIntThreshold') }}
                                    <el-popover
                                        placement="top"
                                        :width="310"
                                        trigger="hover"
                                    >
                                        <template #reference>
                                            <question-filled width="1em" height="1em" />
                                        </template>
                                        <p><strong>{{ t('settings.advanced.forceCalcInt') }}</strong></p>
                                        <p>{{ t('settings.behavior.filter.localIntThresholdDesc') }}</p>
                                        <p>{{ t('settings.intensityReference.csisTitle') }}</p>
                                        <p> - {{ t('settings.intensityReference.csis1') }}</p>
                                        <p> - {{ t('settings.intensityReference.csis2_3') }}</p>
                                        <p> - {{ t('settings.intensityReference.csis4_5') }}</p>
                                        <p> - {{ t('settings.intensityReference.csis6_7') }}</p>
                                        <p> - {{ t('settings.intensityReference.csis8_9') }}</p>
                                        <p> - {{ t('settings.intensityReference.csis10_plus') }}</p>
                                    </el-popover>
                                </span>
                                <div class="int" :class="setClassName(settingsStore.mainSettings.actionLocalCsis, false)">
                                    <div class="csis" :class="{
                                        'roman': settingsStore.mainSettings.useRomanCsis,
                                        'scale-9': settingsStore.mainSettings.actionLocalCsis == 8
                                    }">{{ formatCsis(settingsStore.mainSettings.actionLocalCsis.toString()) }}</div>
                                </div>
                            </div>
                            <el-slider
                                v-model="settingsStore.mainSettings.actionLocalCsis"
                                :disabled="!settingsStore.advancedSettings.forceCalcInt"
                                :min="0" :max="12"
                                :step="1"
                                size="small"
                                show-stops
                            />
                        </div>
                        <div class="switch-full" v-else>
                            <div class="justify-between" style="width: 10rem;">
                                <span>
                                    {{ t('settings.behavior.filter.localShindoThreshold') }}
                                    <el-popover
                                        placement="top"
                                        :width="310"
                                        trigger="hover"
                                    >
                                        <template #reference>
                                            <question-filled width="1em" height="1em" />
                                        </template>
                                        <p><strong>{{ t('settings.advanced.forceCalcInt') }}</strong></p>
                                        <p>{{ t('settings.behavior.filter.localShindoThresholdDesc') }}</p>
                                        <p>{{ t('settings.intensityReference.csisTitle') }}</p>
                                        <p> - {{ t('settings.intensityReference.shindo0') }}</p>
                                        <p> - {{ t('settings.intensityReference.shindo1') }}</p>
                                        <p> - {{ t('settings.intensityReference.shindo2') }}</p>
                                        <p> - {{ t('settings.intensityReference.shindo3') }}</p>
                                        <p> - {{ t('settings.intensityReference.shindo4') }}</p>
                                        <p> - {{ t('settings.intensityReference.shindo5') }}</p>
                                        <p> - {{ t('settings.intensityReference.shindo6') }}</p>
                                        <p> - {{ t('settings.intensityReference.shindo7') }}</p>
                                    </el-popover>
                                </span>
                                <div class="int" :class="setClassName(shindoScale[settingsStore.mainSettings.actionLocalShindo], true)">
                                    <div class="shindo">{{ shindoScale[settingsStore.mainSettings.actionLocalShindo] }}</div>
                                </div>
                            </div>
                            <el-slider
                                v-model="settingsStore.mainSettings.actionLocalShindo"
                                :disabled="!settingsStore.advancedSettings.forceCalcInt"
                                :min="0" :max="9"
                                :step="1"
                                size="small"
                                show-stops
                                :format-tooltip="(value) => shindoScale[value]"
                            />
                        </div>
                        <div class="switch-full pl-4">
                            <div class="justify-between" style="width: 9rem;">
                                <el-checkbox
                                    v-model="settingsStore.mainSettings.playIntenseSound"
                                    :disabled="!settingsStore.advancedSettings.forceCalcInt"
                                >{{ t('settings.behavior.filter.intenseSound') }}</el-checkbox>
                                <div v-if="!settingsStore.nearestJmaLoc" class="int" :class="setClassName(settingsStore.mainSettings.intenseLocalCsis, false)">
                                    <div class="csis" :class="{
                                        'roman': settingsStore.mainSettings.useRomanCsis,
                                        'scale-9': settingsStore.mainSettings.intenseLocalCsis == 8
                                    }">{{ formatCsis(settingsStore.mainSettings.intenseLocalCsis.toString()) }}</div>
                                </div>
                                <div v-else class="int" :class="setClassName(shindoScale[settingsStore.mainSettings.intenseLocalShindo], true)">
                                    <div class="shindo">{{ shindoScale[settingsStore.mainSettings.intenseLocalShindo] }}</div>
                                </div>
                            </div>
                            <el-slider
                                v-if="!settingsStore.nearestJmaLoc"
                                v-model="settingsStore.mainSettings.intenseLocalCsis"
                                :disabled="!settingsStore.advancedSettings.forceCalcInt || !settingsStore.mainSettings.playIntenseSound"
                                :min="0" :max="12"
                                :step="1"
                                size="small"
                                show-stops
                            />
                            <el-slider
                                v-else
                                v-model="settingsStore.mainSettings.intenseLocalShindo"
                                :disabled="!settingsStore.advancedSettings.forceCalcInt || !settingsStore.mainSettings.playIntenseSound"
                                :min="0" :max="9"
                                :step="1"
                                size="small"
                                show-stops
                                :format-tooltip="(value) => shindoScale[value]"
                            />
                        </div>
                        <div class="switch-full" v-if="settingsStore.advancedSettings.enableGqEew">
                            <div class="justify-between" style="width: 10rem;">
                                <span>{{ t('settings.behavior.filter.gqMagThreshold') }}</span>
                                <div class="mag" :class="setClassName(calcCsisLevel(settingsStore.mainSettings.gqActionMag, 10, 0), false)">
                                    {{ settingsStore.mainSettings.gqActionMag.toFixed(1) }}
                                </div>
                            </div>
                            <el-slider
                                v-model="settingsStore.mainSettings.gqActionMag"
                                :min="0" :max="9"
                                :step="0.1"
                                size="small"
                            />
                        </div>
                        <div class="switch-full">
                            <div class="justify-between" style="width: 10rem;">
                                <span>{{ t('settings.behavior.filter.usgsMagThreshold') }}</span>
                                <div class="mag" :class="setClassName(calcCsisLevel(settingsStore.mainSettings.usgsActionMag, 10, 0), false)">
                                    {{ settingsStore.mainSettings.usgsActionMag.toFixed(1) }}
                                </div>
                            </div>
                            <el-slider
                                v-model="settingsStore.mainSettings.usgsActionMag"
                                :min="0" :max="9"
                                :step="0.1"
                                size="small"
                            />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.behavior.filter.fssnEventType') }}</span>
                            <el-select
                                style="width: 120px;"
                                v-model="settingsStore.mainSettings.fssnActionType"
                                size="small"
                            >
                                <el-option :label="t('settings.behavior.filter.fssnEventAuto')" :value=0 />
                                <el-option :label="t('settings.behavior.filter.fssnEventFormal')" :value=1 />
                            </el-select>
                        </div>
                        <div class="switch-full">
                            <div class="justify-between" style="width: 10rem;">
                                <span>{{ t('settings.behavior.filter.fssnMagThreshold') }}</span>
                                <div class="mag" :class="setClassName(calcCsisLevel(settingsStore.mainSettings.fssnActionMag, 10, 0), false)">
                                    {{ settingsStore.mainSettings.fssnActionMag.toFixed(1) }}
                                </div>
                            </div>
                            <el-slider
                                v-model="settingsStore.mainSettings.fssnActionMag"
                                :min="0" :max="9"
                                :step="0.1"
                                size="small"
                            />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.behavior.filter.placeNameWhitelist') }}
                                <el-popover
                                    placement="top"
                                    :width="310"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.behavior.filter.whitelistDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-input
                                class="text-right"
                                v-model="settingsStore.mainSettings.actionWhiteList"
                                style="width: 180px;"
                                size="small"
                                :placeholder="t('settings.behavior.filter.placeNameWhitelistPlaceholder')"
                            />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.notification.onEewWarn') }}</span>
                    <div class="switch-group justify-between">
                        <div class="switch" v-if="showNotifButton">
                            <span>{{ t('settings.notification.sendNotification') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onEewWarn.notification" :disabled="settingsStore.mainSettings.onEew.notification" />
                        </div>
                        <div class="switch">
                            <span>{{ t('settings.notification.playSound') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onEewWarn.sound" :disabled="settingsStore.mainSettings.onEew.sound" />
                        </div>
                        <div class="switch" v-if="isTauri">
                            <span>{{ t('settings.notification.popupWindow') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onEewWarn.focus" :disabled="settingsStore.mainSettings.onEew.focus" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.notification.onEew') }}</span>
                    <div class="switch-group justify-between">
                        <div class="switch" v-if="showNotifButton">
                            <span>{{ t('settings.notification.sendNotification') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onEew.notification" />
                        </div>
                        <div class="switch">
                            <span>{{ t('settings.notification.playSound') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onEew.sound" />
                        </div>
                        <div class="switch" v-if="isTauri">
                            <span>{{ t('settings.notification.popupWindow') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onEew.focus" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.notification.onReport') }}</span>
                    <div class="switch-group justify-between">
                        <div class="switch" v-if="showNotifButton">
                            <span>{{ t('settings.notification.sendNotification') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onReport.notification" />
                        </div>
                        <div class="switch">
                            <span>{{ t('settings.notification.playSound') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onReport.sound" />
                        </div>
                        <div class="switch" v-if="isTauri">
                            <span>{{ t('settings.notification.popupWindow') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onReport.focus" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.notification.onShake') }}</span>
                    <div class="switch-group justify-between">
                        <div class="switch" v-if="showNotifButton">
                            <span>{{ t('settings.notification.sendNotification') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onShake.notification" />
                        </div>
                        <div class="switch">
                            <span>{{ t('settings.notification.playSound') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onShake.sound" />
                        </div>
                        <div class="switch" v-if="isTauri">
                            <span>{{ t('settings.notification.popupWindow') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onShake.focus" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.notification.onTsunami') }}</span>
                    <div class="switch-group justify-between">
                        <div class="switch" v-if="showNotifButton">
                            <span>{{ t('settings.notification.sendNotification') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onTsunami.notification" />
                        </div>
                        <div class="switch">
                            <span>{{ t('settings.notification.playSound') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onTsunami.sound" />
                        </div>
                        <div class="switch" v-if="isTauri">
                            <span>{{ t('settings.notification.popupWindow') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.onTsunami.focus" />
                        </div>
                    </div>
                </div>
                <span class="sub-title">{{ t('settings.sound.title') }}</span>
                <div class="group">
                    <div class="switch-group">
                        <div class="switch-full">
                            <span style="width: 7rem;">{{ t('settings.sound.masterVolume') }}：{{ settingsStore.mainSettings.masterVolume }}%</span>
                            <el-slider
                                v-model="settingsStore.mainSettings.masterVolume"
                                :min="0" :max="100"
                                :step="5"
                                size="small"
                            />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.sound.muteNotification') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.muteNotification" />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.sound.selectSound') }}</span>
                            <el-select
                                v-model="settingsStore.mainSettings.soundEffect"
                                size="small"
                                style="width: 72px;"
                            >
                                <el-option label="SREV" value="srev" />
                            </el-select>
                        </div>
                        <div class="switch-full">
                            <span>{{ isTauri ? t('settings.sound.customSound') : t('settings.sound.previewSound') }}</span>
                            <el-button size="small" @click="customizeAudio = true">{{ isTauri ? t('settings.sound.customize') : t('settings.sound.preview') }}</el-button>
                        </div>
                    </div>
                </div>
                <span class="sub-title">{{ t('settings.display.title') }}</span>
                <div class="group">
                    <span class="font-bold w-full">
                        {{ t('settings.display.location.title') }}
                        <el-popover
                            placement="top"
                            :width="300"
                            trigger="hover"
                        >
                            <template #reference>
                                <question-filled width="1em" height="1em" />
                            </template>
                            <strong>
                                <p>{{ t('settings.display.location.noEffect') }}</p>
                                <p>{{ t('settings.display.location.notImmediate') }}</p>
                            </strong>
                        </el-popover>
                    </span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.display.location.latitude') }}</span>
                            <el-input-number
                                class="lat-lng"
                                v-model="settingsStore.mainSettings.userLatLng[0]"
                                size="small"
                                :step="0.1"
                                :min="-90"
                                :max="90"
                                @change="val => setLat('userLatLng')(val)"
                            />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.location.longitude') }}</span>
                            <el-input-number
                                class="lat-lng"
                                v-model="settingsStore.mainSettings.userLatLng[1]"
                                size="small"
                                :step="0.1"
                                :min="-180"
                                :max="180"
                                @change="val => setLng('userLatLng')(val)"
                            />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.location.autoLocate') }}</span>
                            <el-button
                                size="small"
                                @click="autoLocate"
                            >{{ t('settings.display.location.autoLocateTitle') }}</el-button>
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.location.clearLocation') }}</span>
                            <el-button
                                size="small"
                                @click="clearUserLatLng"
                            >{{ t('settings.display.location.clear') }}</el-button>
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.location.showLocation') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.displayUser" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.display.countdown.title') }}</span>
                    <div class="switch-group">
                        <div class="w-full">
                            <div class="switch-full">
                                <span>{{ t('settings.display.countdown.show') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.displayCountdown" />
                            </div>
                            <div class="switch-full pl-4">
                                <span>{{ t('settings.display.countdown.force') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.forceDisplayCountdown" :disabled="!settingsStore.mainSettings.displayCountdown" />
                            </div>
                            <div class="switch-full pl-4">
                                <span>{{ t('settings.display.countdown.playSound') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.playCountdownSound" :disabled="!settingsStore.mainSettings.displayCountdown" />
                            </div>
                            <div class="switch-full pl-8">
                                <span>{{ t('settings.display.countdown.onlyIntense') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.countdownOnlyIntense" :disabled="!(settingsStore.mainSettings.displayCountdown && settingsStore.mainSettings.playCountdownSound && settingsStore.advancedSettings.forceCalcInt && settingsStore.mainSettings.playIntenseSound)" />
                            </div>
                            <div class="switch-full pl-8">
                                <span>{{ t('settings.display.countdown.speech') }}</span>
                                <el-switch v-model="settingsStore.mainSettings.countdownSpeech" :disabled="!(settingsStore.mainSettings.displayCountdown && settingsStore.mainSettings.playCountdownSound)" />
                            </div>
                            <div class="switch-full pl-8">
                                <span style="width: 10rem;">{{ t('settings.display.countdown.start', { seconds: settingsStore.mainSettings.countdownStart }) }}</span>
                                <el-slider
                                    v-model="settingsStore.mainSettings.countdownStart"
                                    :disabled="!(settingsStore.mainSettings.displayCountdown && settingsStore.mainSettings.playCountdownSound)"
                                    :min="5" :max="60"
                                    :step="5"
                                    size="small"
                                    show-stops
                                />
                            </div>
                        </div>
                    </div>
                    <span class="font-bold w-full">
                        {{ t('settings.display.view.title') }}
                        <el-popover
                            placement="top"
                            :width="300"
                            trigger="hover"
                        >
                            <template #reference>
                                <question-filled width="1em" height="1em" />
                            </template>
                            <strong>
                                <p>{{ t('settings.display.view.description') }}</p>
                            </strong>
                        </el-popover>
                    </span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.display.view.latitude') }}</span>
                            <el-input-number
                                class="lat-lng"
                                v-model="settingsStore.mainSettings.viewLatLng[0]"
                                size="small"
                                :step="0.1"
                                :min="-90"
                                :max="90"
                                @change="val => setLat('viewLatLng')(val)"
                            />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.view.longitude') }}</span>
                            <el-input-number
                                class="lat-lng"
                                v-model="settingsStore.mainSettings.viewLatLng[1]"
                                size="small"
                                :step="0.1"
                                :min="-180"
                                :max="180"
                                @change="val => setLng('viewLatLng')(val)"
                            />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.view.zoom') }}</span>
                            <el-input-number
                                v-model="settingsStore.mainSettings.defaultZoom"
                                size="small"
                                :min="2"
                                :max="12"
                                :precision="0"
                                style="width: 84px;"
                            />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.view.setAsCurrent') }}</span>
                            <el-button
                                size="small"
                                @click="setCurrentViewAsDefault"
                            >{{ t('settings.display.view.set') }}</el-button>
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.view.clearView') }}</span>
                            <el-button
                                size="small"
                                @click="clearViewLatLng"
                            >{{ t('settings.display.view.clear') }}</el-button>
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.display.intensity.title') }}</span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.display.intensity.useRoman') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.useRomanCsis" />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.intensity.showLegend') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.displayLegend" :disabled="settingsStore.mainSettings.disableEewBaseMap" />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.intensity.showAreaList') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.displayAreaIntensities" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.display.placeName.title') }}</span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.display.placeName.show') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.displayPlaceName"
                            @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.display.placeName.hover') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.display.placeName.conflictBitRender') }}</p>
                                </el-popover>
                            </span>
                            <el-switch v-model="settingsStore.mainSettings.placeNameOnHover"
                            :disabled="settingsStore.mainSettings.useCanvasRenderer"
                            @change="handleNeedReload" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.display.wave.title') }}</span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.display.wave.colorMode') }}</span>
                            <el-select
                                style="width: 168px;"
                                v-model="settingsStore.mainSettings.sWaveColorMode"
                                size="small"
                            >
                                <el-option :label="t('settings.display.wave.colorByAlert')" :value=0 />
                                <el-option :label="t('settings.display.wave.colorByMag')" :value=1 />
                                <el-option :label="t('settings.display.wave.colorByIntensity')" :value=2 />
                            </el-select>
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.wave.fillWave') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.fillSWave" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.display.ui.title') }}</span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.display.ui.scale') }}</span>
                            <el-select
                                style="width: 120px;"
                                v-model="settingsStore.mainSettings.uiScale"
                                size="small"
                            >
                                <el-option :label="t('settings.display.ui.auto')" :value=-1 />
                                <el-option label="50%" :value=0.5 />
                                <el-option label="75%" :value=0.75 />
                                <el-option :label="t('settings.display.ui.recommendedLabel')" :value=1 />
                                <el-option label="125%" :value=1.25 />
                                <el-option label="150%" :value=1.5 />
                                <el-option label="200%" :value=2 />
                            </el-select>
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.display.personalize.title') }}</span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.display.personalize.defaultPage') }}</span>
                            <el-select
                                style="width: 120px;"
                                v-model="settingsStore.mainSettings.defaultMenuId"
                                size="small"
                            >
                                <el-option :label="t('settings.display.personalize.pageMain')" value="main" />
                                <el-option :label="t('settings.display.personalize.pageEew')" value="eews" />
                                <el-option :label="t('settings.display.personalize.pageEqlists')" value="eqlists" />
                            </el-select>
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.personalize.disableLasting') }}</span>
                            <el-switch
                                v-model="settingsStore.mainSettings.disableLastingEqlists"
                                :disabled="settingsStore.mainSettings.defaultMenuId == 'eqlists'"
                            />
                        </div>
                        <div class="switch-full">
                            <span style="width: 12rem;">{{ t('settings.display.personalize.tempEqlistDuration') }}：{{ settingsStore.mainSettings.tempEqlistDuration > 0 ? settingsStore.mainSettings.tempEqlistDuration + t('settings.display.personalize.seconds') : t('settings.display.personalize.off') }}</span>
                            <el-slider
                                v-model="settingsStore.mainSettings.tempEqlistDuration"
                                :min="0" :max="10"
                                :step="0.5"
                                size="small"
                            />
                        </div>
                        <div class="switch-full">
                            <span style="width: 12rem;">{{ t('settings.display.personalize.tempTsunamiDuration') }}：{{ settingsStore.mainSettings.tempTsunamiDuration > 0 ? settingsStore.mainSettings.tempTsunamiDuration + t('settings.display.personalize.seconds') : t('settings.display.personalize.off') }}</span>
                            <el-slider
                                v-model="settingsStore.mainSettings.tempTsunamiDuration"
                                :min="0" :max="20"
                                :step="1"
                                size="small"
                            />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.personalize.eqlistDisplayMode') }}</span>
                            <el-select
                                style="width: 192px;"
                                v-model="settingsStore.mainSettings.eqlistsDisplayMode"
                                size="small"
                                @change="handleNeedReload"
                            >
                                <el-option :label="t('settings.display.personalize.modeLatestPerSource')" :value=0 />
                                <el-option :label="t('settings.display.personalize.modeLatestAll')" :value=1 />
                            </el-select>
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.personalize.alwaysLatest') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.alwaysDisplayLatestInfo" />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.display.personalize.hideDrawer') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.display.personalize.hideDrawerDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-switch v-model="settingsStore.mainSettings.hideDrawer" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.display.features.title') }}</span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.display.features.cnFault') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.displayCnFault" />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.features.terminator') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.displayTerminator" />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.display.features.typhoon') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.displayTyphoon" />
                        </div>
                    </div>
                </div>
                <span class="sub-title">{{ t('settings.performance.title') }}</span>
                <div class="group">
                    <div class="switch-group">
                        <div class="switch-full">
                            <span style="width: 14rem;">{{ t('settings.performance.waveRenderRate') }}：{{ settingsStore.mainSettings.maxWaveRenderRate }}{{ t('settings.performance.timesPerSec') }}</span>
                            <el-slider
                                v-model="settingsStore.mainSettings.maxWaveRenderRate"
                                :min="1" :max="20"
                                :step="1"
                                size="small"
                            />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.performance.bitmapRender') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.performance.bitmapRenderDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-switch v-model="settingsStore.mainSettings.useCanvasRenderer"
                            @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.performance.disableIntensity') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.performance.disableIntensityDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-switch v-model="settingsStore.mainSettings.disableEewBaseMap"
                            @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.performance.simplifyLayer') }}
                                <el-popover
                                    placement="top"
                                    :width="350"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.performance.simplifyDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-slider
                                v-model="settingsStore.mainSettings.mapSimplifyFactor"
                                :min="0" :max="4"
                                :step="1"
                                size="small"
                                show-stops
                                :show-tooltip="false"
                                :marks="simplifyMarks"
                                @change="handleNeedReload"
                            />
                        </div>
                    </div>
                </div>
                <span class="sub-title">{{ t('settings.advanced.title') }}</span>
                <div class="group">
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.advanced.fanServer') }}</span>
                            <el-select
                                v-model="settingsStore.advancedSettings.defaultFanServer"
                                size="small"
                                style="width: 72px;"
                                @change="handleNeedReload"
                            >
                                <el-option label=".tech" :value="0" />
                                <el-option label=".hk" :value="1" />
                            </el-select>
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.advanced.provinceCea') }}</span>
                            <el-switch v-model="settingsStore.advancedSettings.provinceCeaEew"
                            @change="handleNeedReload" />
                        </div>
                        <div class="switch-full" v-if="settingsStore.displayTokenButton">
                            <span>{{ t('settings.advanced.manageToken') }}</span>
                            <el-button size="small" @click="showTokenManager = true">{{ t('settings.advanced.manage') }}</el-button>
                        </div>
                        <div class="switch-full" v-if="settingsStore.advancedSettings.enableMultiApi">
                            <span>{{ t('settings.advanced.multiApi') }}</span>
                            <el-switch
                            v-model="settingsStore.advancedSettings.multiApi"
                            @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.advanced.displayApi') }}</span>
                            <el-switch v-model="settingsStore.advancedSettings.displayApiType" />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.advanced.forceCalcInt') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.advanced.forceCalcIntDesc') }}</p>
                                    <strong>
                                        <p>{{ t('settings.advanced.warningLowPrecision') }}</p>
                                        <p>{{ t('settings.advanced.warningHighResource') }}</p>
                                        <p>{{ t('settings.advanced.warningNeedReload') }}</p>
                                    </strong>
                                </el-popover>
                            </span>
                            <el-switch
                            v-model="settingsStore.advancedSettings.forceCalcInt"
                            @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.advanced.classicMap') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.advanced.classicMapDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-switch
                            v-model="settingsStore.advancedSettings.useClassicMapLoader"
                            @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.advanced.antiFlicker') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.advanced.antiFlickerDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-switch
                            v-model="settingsStore.advancedSettings.preventFlickerMode"
                            @change="handleNeedReload" />
                        </div>
                        <div class="switch-full">
                            <span>
                                {{ t('settings.advanced.mockEew') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.advanced.mockEewDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-switch
                            v-model="settingsStore.advancedSettings.mockEew"
                            @change="handleMockEew" />
                        </div>
                        <div class="switch-full pl-4">
                            <span>
                                {{ t('settings.advanced.mockOnReplay') }}
                                <el-popover
                                    placement="top"
                                    :width="300"
                                    trigger="hover"
                                >
                                    <template #reference>
                                        <question-filled width="1em" height="1em" />
                                    </template>
                                    <p>{{ t('settings.advanced.mockOnReplayDesc') }}</p>
                                </el-popover>
                            </span>
                            <el-switch
                            v-model="settingsStore.advancedSettings.mockOnReplay"
                            :disabled="!settingsStore.advancedSettings.mockEew" />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.advanced.statusPanel') }}</span>
                            <el-button size="small" @click="statusStore.showStatusPanel = true">{{ t('settings.advanced.open') }}</el-button>
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.advanced.commandInput') }}</span>
                            <el-input
                                type="password"
                                v-model="advancedInput"
                                size="small"
                                style="width: 192px;"
                                @change="handleAdvance"
                            />
                        </div>
                    </div>
                </div>
                <span class="sub-title">{{ t('settings.about.title') }}</span>
                <div class="group">
                    <span class="font-bold w-full">{{ t('language.title') }}</span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('language.select') }}</span>
                            <el-select
                                style="width: 120px;"
                                size="small"
                                v-model="settingsStore.mainSettings.locale"
                            >
                                <el-option v-for="locale in availableLocales" :key="locale" :label="t('language.name', [], { locale })" :value="locale" />
                            </el-select>
                        </div>
                    </div>
                    <span class="font-bold w-full" v-if="isTauri">{{ t('settings.about.autoStart') }}</span>
                    <div class="switch-group" v-if="isTauri">
                        <div class="switch-full">
                            <span>{{ t('settings.about.autoStartBoot') }}</span>
                            <el-switch v-model="isAutoStart" @change="handleAutoStart" />
                        </div>
                        <div class="switch-full" v-if="thisPlatform == 'windows'">
                            <span>{{ t('settings.about.autoStartMinimized') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.minimizeOnLaunch" />
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.about.update') }}</span>
                    <div class="switch-group">
                        <div class="switch-full">
                            <span>{{ t('settings.about.autoCheckUpdate') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.autoCheckNewVersion" @change="handleAutoCheckVersion" />
                        </div>
                        <div class="switch-full" v-if="isTauri">
                            <span>{{ t('settings.about.checkPrerelease') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.checkPrerelease" />
                        </div>
                        <div class="switch-full" v-if="!isTauri">
                            <span>{{ t('settings.about.autoApplyUpdate') }}</span>
                            <el-switch v-model="settingsStore.mainSettings.autoRefresh" />
                        </div>
                        <div class="switch-full">
                            <span>{{ t('settings.about.checkUpdate') }}</span>
                            <el-button
                                type="primary"
                                size="small"
                                @click="checkNewVersion(false)"
                            >{{ t('settings.about.checkUpdateBtn') }}</el-button>
                        </div>
                    </div>
                    <span class="font-bold w-full">{{ t('settings.about.help') }}</span>
                    <div class="switch-group">
                        <el-button @click="showAbout = true">{{ t('settings.about.help') }}</el-button>
                    </div>
                </div>
                <span class="sub-title" v-if="needReload">{{ t('settings.needReload') }}</span>
                <div class="group">
                    <el-button
                        type="warning"
                        v-if="needReload"
                        @click="handleReload"
                    >{{ t('settings.reloadToApply') }}</el-button>
                </div>
            </div>
        </div>
        <el-dialog v-model="verifyDialog" width="300px" top="20vh" :show-close="false" append-to-body>
            <el-form :model="idForm">
                <el-form-item :label="t('advance.verifyDialog.username')" label-width="60px">
                    <el-input v-model="idForm.username" @keyup.enter="postVerify()" />
                </el-form-item>
                <el-form-item :label="t('advance.verifyDialog.password')" label-width="60px">
                    <el-input type="password" v-model="idForm.password" @keyup.enter="postVerify()" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="default" @click="verifyDialog = false">{{ t('advance.verifyDialog.cancel') }}</el-button>
                <el-button type="primary" @click="postVerify()">{{ t('advance.verifyDialog.confirm') }}</el-button>
            </template>
        </el-dialog>
        <el-dialog class="customize-audio" v-model="customizeAudio" width="60%" :show-close="false" append-to-body>
            <div class="explanation" v-if="isTauri">
                <div class="text">
                    <p><strong>{{ t('audio.customInstructions.title') }}</strong></p>
                    <p>{{ t('audio.customInstructions.step1') }}</p>
                    <p>{{ t('audio.customInstructions.step2') }}</p>
                    <p>{{ t('audio.customInstructions.step3') }}</p>
                    <p>{{ t('audio.customInstructions.testInfo') }}</p>
                    <p>{{ t('audio.customInstructions.tip') }}</p>
                    <p><strong>{{ t('audio.customInstructions.disclaimer') }}</strong></p>
                </div>
                <div class="buttons">
                    <el-button @click="openDataFolder">{{ t('settings.sound.openAudioFolder') }}</el-button>
                    <el-button @click="loadAudio">{{ t('settings.sound.reloadAudio') }}</el-button>
                </div>
            </div>
            <div class="test">
                <div class="text">
                    <strong>{{ t('audio.testTitle') }}</strong>
                </div>
                <div class="buttons">
                    <el-button v-for="(type, index) of audioTypes" :key="index" @click="playSound(type)">{{ type }}</el-button>
                </div>
            </div>
            <template #footer>
                <el-button type="default" @click="customizeAudio = false">{{ t('common.close') }}</el-button>
            </template>
        </el-dialog>
        <el-dialog v-model="showTokenManager" width="300px" top="20vh" :show-close="false" append-to-body>
            <el-form :model="idForm">
                <el-form-item v-if="settingsStore.advancedSettings.enableIclEew" label="FAN:DEV" label-width="60px">
                    <el-input v-model="settingsStore.advancedSettings.tokens.fan_dev" @change="handleNeedReload" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="primary" @click="showTokenManager = false">{{ t('advance.tokenManager.done') }}</el-button>
            </template>
        </el-dialog>
        <el-dialog class="about-box" v-model="showAbout" width="60%" :show-close="false" append-to-body>
                        <div class="header">{{ APP_TITLE }}</div>
            <div class="title">{{ t('about.notes') }}</div>
            <div class="about">
                <p>{{ t('about.disclaimer1') }}</p>
                <p class="font-red">{{ t('about.disclaimer2') }}</p>
                <p class="font-red">{{ t('about.disclaimer3') }}</p>
                <p>{{ t('about.disclaimer4') }}</p>
            </div>
            <div class="title">{{ t('about.usage') }}</div>
            <div class="about">
                <p>{{ t('about.usageApp') }}<a href="https://github.com/Lipomoea/kanameishi/releases" target="_blank">{{ t('about.downloadApp') }}</a>&nbsp;<a href="https://gitee.com/lipomoea/kanameishi/releases" target="_blank">{{ t('about.mirrorLink') }}</a></p>
                <p>{{ t('about.usageMainFeatures') }}</p>
                <p>{{ t('about.usageNotification') }}</p>
                <p>{{ t('about.usageSound') }}</p>
            </div>
            <div class="title">{{ t('about.shortcuts') }}</div>
            <div class="about">
                <ul>
                    <li>{{ t('about.shortcutAuto') }}</li>
                    <li>{{ t('about.shortcutDrawer') }}</li>
                    <li>{{ t('about.shortcutFull') }}</li>
                    <li>{{ t('about.shortcutEew') }}</li>
                    <li>{{ t('about.shortcutList') }}</li>
                    <li>{{ t('about.shortcutSettings') }}</li>
                    <li>{{ t('about.shortcutClear') }}</li>
                    <li v-if="settingsStore.advancedSettings.mockEew">{{ t('about.shortcutMock') }}</li>
                    <li>{{ t('about.shortcutStatus') }}</li>
                    <li>{{ t('about.shortcutMenuCycle') }}</li>
                    <li>{{ t('about.shortcutInfoCycle') }}</li>
                </ul>
            </div>
            <div class="title">{{ t('about.faq') }}</div>
            <div class="about">
                <p>{{ t('about.faqIntensity') }}</p>
                <p>{{ t('about.faqTime') }}</p>
                <p>{{ t('about.faqDelay') }}</p>
                <p>{{ t('about.faqMap') }}</p>
            </div>
            <div class="title">{{ t('about.about') }}</div>
            <div class="about">
                <p>{{ t('about.creditsContact') }}<a href="https://space.bilibili.com/316757498" target="_blank">リッポミャ</a>{{ t('about.creditsBilibili') }}</p>
                <p>{{ t('about.creditsGithub') }}<a href="https://github.com/Lipomoea/kanameishi" target="_blank">https://github.com/Lipomoea/kanameishi</a></p>
                <p>{{ t('about.creditsThanks') }}</p>
                <p>{{ t('about.creditsApi') }}</p>
                <p>{{ t('about.creditsSound') }}</p>
                <p>{{ t('about.creditsCountdownSpeech') }}</p>
            </div>
            <template #footer>
                <el-button type="default" @click="showAbout = false">{{ t('common.close') }}</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const {t, locale, availableLocales} = useI18n({useScope: 'global'})

import { useSettingsStore } from '@/stores/settings';
import { useStatusStore } from '@/stores/status';
import { chimeUrls, utilUrls } from '@/utils/Urls';
import { APP_TITLE, APP_VERSION } from '@/utils/AppInfo';
import Http from '@/classes/Http';
import { h, ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { QuestionFilled } from '@element-plus/icons-vue';
import { calcPassedTime, formatCsis, openUrl, playSound, setClassName, shindoScale, calcCsisLevel } from '@/utils/Utils';
import { join, appDataDir } from "@tauri-apps/api/path";
import { convertFileSrc } from "@tauri-apps/api/core";
import { exists, mkdir } from "@tauri-apps/plugin-fs";
import { enable, disable, isEnabled } from '@tauri-apps/plugin-autostart';
import { platform, arch } from '@tauri-apps/plugin-os';
import { isTauri as getIsTauri } from '@tauri-apps/api/core';
import { Setting } from '@element-plus/icons-vue';
import MarkdownIt from 'markdown-it';

const SHOW_ABOUT_FLG = '20260313.00'

const showNotifButton = 'Notification' in window
const isTauri = getIsTauri()
const thisPlatform = isTauri ? platform() : ''
const thisArch = isTauri ? arch() : ''
const simplifyMarks = {
    0: t('settings.performance.simplifyOff'),
    1: t('settings.performance.simplifyMild'),
    2: t('settings.performance.simplifyModerate'),
    3: t('settings.performance.simplifySignificant'),
    4: t('settings.performance.simplifyExtreme')
}
const settingsStore = useSettingsStore()
const statusStore = useStatusStore()
const replayDateTime = ref('')
const setReplayDateTime = () => {
    const passedTime = Math.max(Math.round(calcPassedTime(replayDateTime.value, 8) / 600) / 100, 0)
    settingsStore.mainSettings.displaySeisNet.delay = passedTime
}
const setLat = (type)=>(val)=>{
    if(!val) {
        settingsStore.mainSettings[type][0] = 0
        return
    }
    let number = Number(val)
    if(isNaN(number)){
        settingsStore.mainSettings[type][0] = 0
    }
    else{
        if(number > 90) number = 90
        if(number < -90) number = -90
        settingsStore.mainSettings[type][0] = number
    }
}
const setLng = (type)=>(val)=>{
    if(!val) {
        settingsStore.mainSettings[type][1] = 0
        return
    }
    let number = Number(val)
    if(isNaN(number)){
        settingsStore.mainSettings[type][1] = 0
    }
    else{
        if(number > 180) number = 180
        if(number < -180) number = -180
        settingsStore.mainSettings[type][1] = number
    }
}
const autoLocate = async ()=>{
    const res = await Http.get(utilUrls.geoIp)
    if(res.city_zh == null){
        ElMessage({
            message: t('settings.notificationMessages.getLocationFailed'),
            type: 'error',
        })
    }
    else{
        ElMessageBox.confirm(
            t('settings.notificationMessages.confirmLocation', { city: res.city_zh, lat: res.latitude, lng: res.longitude }),
            t('settings.display.location.autoLocateTitle'),
            {
                confirmButtonText: t('common.confirm'),
                cancelButtonText: t('common.cancel'),
                type: 'info',
                showClose: false,
            }
        ).then(()=>{
            setLat('userLatLng')(res.latitude)
            setLng('userLatLng')(res.longitude)
            ElMessage({
                message: t('settings.notificationMessages.locationUpdated'),
                type: 'success',
            })
        }).catch(()=>{
            ElMessage({
                message: t('settings.notificationMessages.locationCancelled'),
                type: 'info',
            })
        })
    }
}
const setDefaultZoom = (val)=>{
    settingsStore.mainSettings.defaultZoom = Math.min(Math.max(val, 2), 12)
}
const setCurrentViewAsDefault = ()=>{
    const map = statusStore.map
    if(map == null){
        ElMessage({
            message: t('settings.notificationMessages.mapNotLoaded'),
            type: 'error',
        })
    }
    else{
        ElMessageBox.confirm(
            t('settings.notificationMessages.reloadConfirm'),
            t('settings.notificationMessages.setViewTitle'),
            {
                confirmButtonText: t('common.confirm'),
                cancelButtonText: t('common.cancel'),
                type: 'info',
                showClose: false,
            }
        ).then(()=>{
            const { lat, lng } = map.getCenter()
            const zoom = map.getZoom()
            setLat('viewLatLng')(lat)
            setLng('viewLatLng')(lng)
            setDefaultZoom(zoom)
            ElMessage({
                message: t('settings.notificationMessages.viewSetSuccess'),
                type: 'success',
            })
        }).catch(()=>{
            ElMessage({
                message: t('settings.notificationMessages.viewSetCancelled'),
                type: 'info',
            })
        })
    }
}
const clearViewLatLng = ()=>{
    settingsStore.mainSettings.viewLatLng[0] = 0
    settingsStore.mainSettings.viewLatLng[1] = 0
    ElMessage({
        message: t('settings.notificationMessages.cleared'),
        type: 'success',
    })
}
const clearUserLatLng = ()=>{
    settingsStore.mainSettings.userLatLng[0] = 0
    settingsStore.mainSettings.userLatLng[1] = 0
    ElMessage({
        message: t('settings.notificationMessages.cleared'),
        type: 'success',
    })
}
const needReload = ref(false)
const handleReload = () => {
    window.location.reload()
}
const handleFssnEqlist = (newVal) => {
    if(newVal) {
        ElMessageBox.confirm(
            t('settings.notificationMessages.fssnConfirmMsg'),
            t('settings.notificationMessages.fssnConfirmTitle'),
            {
                confirmButtonText: t('common.confirm'),
                cancelButtonText: t('common.cancel'),
                type: 'warning',
                showClose: false,
            }
        ).then(()=>{
            handleNeedReload()
        }).catch(()=>{
            settingsStore.mainSettings.source.fssnEqlist = false
        })
    }
    else {
        handleNeedReload()
    }
}
const handleMockEew = newVal => {
    if(newVal) {
        ElMessageBox.confirm(
            t('settings.notificationMessages.mockEewConfirmMsg'),
            t('settings.notificationMessages.mockEewConfirmTitle'),
            {
                confirmButtonText: t('common.agree'),
                cancelButtonText: t('common.disagree'),
                type: 'warning',
                showClose: false,
            }
        ).then(()=>{
            handleNeedReload()
        }).catch(()=>{
            settingsStore.advancedSettings.mockEew = false
        })
    }
    else {
        handleNeedReload()
    }
}
const showTokenManager = ref(false)
const advancedInput = ref('')
const verifyDialog = ref(false)
let verifyType = ''
const idForm = reactive({
    username: '',
    password: '',
})
const handleAdvance = (val)=>{
    switch(val){
        case 'enableIclEew':
        case 'enableTremFunctions':
        case 'enableGqEew':
        case 'enableMultiApi':
        case 'enableNmefcTsunami':
        case 'verifyAdmin': {
            verifyType = val
            verifyDialog.value = true
            break
        }
        case 'enableAdvancedHypoInf': {
            settingsStore.advancedSettings.advancedHypoInf = true
            ElMessage({
                message: '功能已开启',
                type: 'success'
            })
            break
        }
        case 'disableAdvancedHypoInf': {
            settingsStore.advancedSettings.advancedHypoInf = false
            if (settingsStore.mainSettings.displaySeisNet.niedHypoInfTextInfo == 2)
                settingsStore.mainSettings.displaySeisNet.niedHypoInfTextInfo = 1
            ElMessage({
                message: '功能已关闭',
                type: 'success'
            })
            break
        }
        case 'disableIclEew': {
            if(settingsStore.mainSettings.source.iclEew) handleNeedReload()
            settingsStore.advancedSettings.enableIclEew = false
            settingsStore.mainSettings.source.iclEew = false
            localStorage.removeItem('iclUrl')
            ElMessage({
                message: t('settings.notificationMessages.featureDisabled'),
                type: 'success'
            })
            break
        }
        case 'disableTremFunctions': {
            settingsStore.advancedSettings.enableTremFunctions = false
            settingsStore.mainSettings.displaySeisNet.tremNet = false
            localStorage.removeItem('tremUrl')
            handleNeedReload()
            ElMessage({
                message: t('settings.notificationMessages.featureDisabled'),
                type: 'success'
            })
            break
        }
        case 'disableGqEew': {
            if(settingsStore.mainSettings.source.gqEew) handleNeedReload()
            settingsStore.advancedSettings.enableGqEew = false
            settingsStore.mainSettings.source.gqEew = false
            localStorage.removeItem('gqUrl')
            ElMessage({
                message: t('settings.notificationMessages.featureDisabled'),
                type: 'success'
            })
            break
        }
        case 'disableMultiApi': {
            if(settingsStore.advancedSettings.multiApi) handleNeedReload()
            settingsStore.advancedSettings.enableMultiApi = false
            settingsStore.advancedSettings.multiApi = false
            localStorage.removeItem('multiApi')
            ElMessage({
                message: t('settings.notificationMessages.featureDisabled'),
                type: 'success'
            })
            break
        }
        case 'disableNmefcTsunami': {
            settingsStore.advancedSettings.enableNmefcTsunami = false
            localStorage.removeItem('nmefcTsunami')
            handleNeedReload()
            ElMessage({
                message: t('settings.notificationMessages.featureDisabled'),
                type: 'success'
            })
            break
        }
    }
    advancedInput.value = ''
}
const postVerify = async (type = verifyType)=>{
    switch(type){
        case 'enableIclEew': {
            const res = await Http.post('https://api.lipomoea.tech/icl_url', idForm)
            if(res && res.success){
                settingsStore.advancedSettings.enableIclEew = true
                localStorage.setItem('iclUrl', JSON.stringify(res.data))
                verifyDialog.value = false
                ElMessage({
                    message: t('settings.notificationMessages.authSuccess'),
                    type: 'success'
                })
            }
            else{
                ElMessage({
                    message: t('settings.notificationMessages.authFailed'),
                    type: 'error'
                })
            }
            break
        }
        case 'enableTremFunctions': {
            const res = await Http.post('https://api.lipomoea.tech/trem_url', idForm)
            if(res && res.success){
                settingsStore.advancedSettings.enableTremFunctions = true
                localStorage.setItem('tremUrl', JSON.stringify(res.data))
                handleNeedReload()
                verifyDialog.value = false
                ElMessage({
                    message: t('settings.notificationMessages.authSuccess'),
                    type: 'success'
                })
            }
            else{
                ElMessage({
                    message: t('settings.notificationMessages.authFailed'),
                    type: 'error'
                })
            }
            break
        }
        case 'enableGqEew': {
            const res = await Http.post('https://api.lipomoea.tech/gq_url', idForm)
            if(res && res.success){
                settingsStore.advancedSettings.enableGqEew = true
                localStorage.setItem('gqUrl', JSON.stringify(res.data))
                verifyDialog.value = false
                ElMessage({
                    message: t('settings.notificationMessages.authSuccess'),
                    type: 'success'
                })
            }
            else{
                ElMessage({
                    message: t('settings.notificationMessages.authFailed'),
                    type: 'error'
                })
            }
            break
        }
        case 'enableMultiApi': {
            const res = await Http.post('https://api.lipomoea.tech/multi_api', idForm)
            if(res && res.success){
                settingsStore.advancedSettings.enableMultiApi = true
                localStorage.setItem('multiApi', JSON.stringify(res.data))
                verifyDialog.value = false
                ElMessage({
                    message: t('settings.notificationMessages.authSuccess'),
                    type: 'success'
                })
            }
            else{
                ElMessage({
                    message: t('settings.notificationMessages.authFailed'),
                    type: 'error'
                })
            }
            break
        }
        case 'enableNmefcTsunami': {
            const res = await Http.post('https://api.lipomoea.tech/cn_tsunami_topo_json_url', idForm)
            if(res && res.success){
                settingsStore.advancedSettings.enableNmefcTsunami = true
                localStorage.setItem('nmefcTsunami', JSON.stringify(res.data))
                handleNeedReload()
                verifyDialog.value = false
                ElMessage({
                    message: t('settings.notificationMessages.authSuccess'),
                    type: 'success'
                })
            }
            else{
                ElMessage({
                    message: t('settings.notificationMessages.authFailed'),
                    type: 'error'
                })
            }
            break
        }
        case 'verifyAdmin': {
            postVerify('enableIclEew')
            postVerify('enableTremFunctions')
            postVerify('enableGqEew')
            postVerify('enableMultiApi')
            postVerify('enableNmefcTsunami')
        }
    }
}
const handleNeedReload = () => {
    if(!needReload.value) {
        needReload.value = true
        ElMessage({
            message: t('settings.notificationMessages.needReloadMsg'),
            type: 'warning',
            duration: 0,
            showClose: true,
            onClose: handleReload
        })
    }
}
const showAbout = ref(false)
let hasNewVersion = false
const checkNewVersion = async (silent = false) => {
    const currentVersion = APP_VERSION
    try {
        const versionInfo = await Http.get('https://api.github.com/repos/Lipomoea/kanameishi/releases')
        let checkedVersion, downloadUrl, detail
        if(isTauri) {
            let fileType
            if(thisPlatform == 'windows') fileType = '.exe'
            else if(thisPlatform == 'linux') {
                if(thisArch == 'aarch64') fileType = 'arm64.deb'
                else if(thisArch == 'x86_64') fileType = 'amd64.deb'
                else {
                    ElMessage({
                        message: t('settings.notificationMessages.unknownArch'),
                        type: 'error'
                    })
                    return
                }
            }
            else if(thisPlatform == 'macos') {
                if(thisArch == 'aarch64') fileType = 'aarch64.dmg'
                else if(thisArch == 'x86_64') fileType = 'x64.dmg'
                else {
                    ElMessage({
                        message: t('settings.notificationMessages.unknownArch'),
                        type: 'error'
                    })
                    return
                }
            }
            else {
                ElMessage({
                    message: t('settings.notificationMessages.unknownPlatform'),
                    type: 'error'
                })
                return
            }
            let i = 0
            let asset = undefined
            while(i < versionInfo.length) {
                asset = versionInfo[i].assets.find(asset => asset.name.endsWith(fileType))
                if((!versionInfo[i].prerelease || settingsStore.mainSettings.checkPrerelease) && asset) break
                i++
            }
            if(i == versionInfo.length) {
                ElMessage({
                    message: t('settings.notificationMessages.noVersionFound'),
                    type: 'info'
                })
                return
            }
            else {
                checkedVersion = versionInfo[i].tag_name.slice(1)
                downloadUrl = asset.browser_download_url
                detail = versionInfo[i].body
            }
        }
        else {
            checkedVersion = versionInfo[0].tag_name.slice(1)
            downloadUrl = ''
            detail = versionInfo[0].body
        }
        if(compareVersion(currentVersion, checkedVersion)) {
            if(!hasNewVersion) {
                hasNewVersion = true
                ElMessage({
                    message: t('settings.notificationMessages.newVersionDetected', { version: checkedVersion }),
                    type: 'success',
                    duration: 0,
                    showClose: true,
                    onClose: () => hasNewVersion = false
                })
            }
            ElMessageBox.close()
            const md = new MarkdownIt({ linkify: true })
            if(isTauri) {
                if(!silent) {
                    ElMessageBox.confirm(
                        h('div', {
                            innerHTML: md.render(detail),
                            style: {
                                listStylePosition: 'inside',
                                maxHeight: '50vh',
                                overflow: 'auto',
                                fontSize: '16px'
                            }
                        }),
                        t('settings.notificationMessages.foundNewVersionTitle', { version: checkedVersion }),
                        {
                            confirmButtonText: t('common.download'),
                            cancelButtonText: t('common.close'),
                            type: '',
                            showClose: false,
                            customStyle: {
                                '--el-messagebox-width': '500px',
                            }
                        }
                    ).then(()=>{
                        openUrl(downloadUrl)
                    })
                }
            }
            else {
                if(settingsStore.mainSettings.autoRefresh) {
                    ElMessage({
                        message: t('settings.notificationMessages.autoRefreshing'),
                        type: 'success'
                    })
                    setTimeout(() => {
                        handleReload()
                    }, 5000);
                }
                else {
                    if(!silent) {
                        ElMessageBox.confirm(
                        h('div', {
                            innerHTML: md.render(detail),
                            style: {
                                listStylePosition: 'inside',
                                maxHeight: '50vh',
                                overflow: 'auto',
                                fontSize: '16px'
                            }
                        }),
                        t('settings.notificationMessages.foundNewVersionTitle', { version: checkedVersion }),
                        {
                            confirmButtonText: t('common.refresh'),
                            cancelButtonText: t('common.close'),
                            type: '',
                            showClose: false,
                            customStyle: {
                                '--el-messagebox-width': '500px',
                            }
                        }
                    ).then(()=>{
                            handleReload()
                        })
                    }
                }
            }
        }
        else if(!silent) {
            ElMessage({
                message: t('settings.notificationMessages.alreadyLatest'),
                type: 'success'
            })
        }
    } catch (_) {
        ElMessage({
            message: t('settings.notificationMessages.checkUpdateFailed'),
            type: 'error'
        })
    }
}
const compareArray = (arr1, arr2) => {
    arr1 = arr1.map(i => Number(i))
    arr2 = arr2.map(i => Number(i))
    const len1 = arr1.length
    const len2 = arr2.length
    const lenDiff = len1 - len2
    if(lenDiff > 0) {
        arr2.push(...new Array(lenDiff).fill(0))
    }
    else if(lenDiff < 0) {
        arr1.push(...new Array(-lenDiff).fill(0))
    }
    const len = arr1.length
    for(let i = 0; i < len; i++) {
        if(arr1[i] > arr2[i]) return true
        else if(arr1[i] < arr2[i]) return false
    }
    return false
}
const compareVersion = (currentVersion, checkedVersion) => {
    const splitCurrent = currentVersion.split('-')
    const splitChecked = checkedVersion.split('-')
    if(compareArray(splitChecked[0].split('.'), splitCurrent[0].split('.'))) return true
    else if(compareArray(splitCurrent[0].split('.'), splitChecked[0].split('.'))) return false
    else if(splitChecked.length < splitCurrent.length) return true
    else if(splitChecked.length > splitCurrent.length) return false
    else if(splitChecked.length == 1) return false
    else {
        const typeArr = ['pre', 'rc']
        const currentSuffixArr = splitCurrent[1].split('.')
        const checkedSuffixArr = splitChecked[1].split('.')
        if(typeArr.indexOf(currentSuffixArr[0]) > typeArr.indexOf(checkedSuffixArr[0])) return false
        else if(typeArr.indexOf(currentSuffixArr[0]) < typeArr.indexOf(checkedSuffixArr[0])) return true
        else {
            currentSuffixArr.shift()
            checkedSuffixArr.shift()
            if(compareArray(checkedSuffixArr, currentSuffixArr)) return true
            else return false
        }
    }
}
let autoCheckInterval
const handleAutoCheckVersion = (val) => {
    clearInterval(autoCheckInterval)
    if(val) {
        checkNewVersion(true)
        autoCheckInterval = setInterval(() => {
            checkNewVersion(true)
        }, 6 * 3600 * 1000);
    }
}
const audioTypes = Object.keys(chimeUrls.general).concat(Object.keys(chimeUrls.srev))
const customizeAudio = ref(false)
const loadAudio = () => {
    if(isTauri) {
        chimeUrls.custom = {}
        audioTypes.forEach(async type => {
            try {
                const fileName = type + '.mp3'
                const appDataPath = await appDataDir()
                const filePath = await join(appDataPath, 'audio', fileName)
                const isExist = await exists(filePath)
                if(isExist) {
                    const url = convertFileSrc(filePath)
                    chimeUrls.custom[type] = url
                }
            } catch (err) {
                console.log(err);
            }
        })
    }
}
const openDataFolder = async () => {
    try {
        const appDataPath = await appDataDir()
        const audioPath = await join(appDataPath, 'audio')
        const isExist = await exists(audioPath)
        if(!isExist) await mkdir(audioPath, { recursive: true })
        openUrl(audioPath)
    } catch (e) {
        console.error(e)
    }
}
const isAutoStart = ref(false)
const handleAutoStart = async (value) => {
    if(isTauri) {
        value ? await enable() : await disable()
        isAutoStart.value = await isEnabled()
    }
}
onMounted(async () => {
    handleAutoCheckVersion(settingsStore.mainSettings.autoCheckNewVersion)
    if(isTauri) {
        loadAudio()
        isAutoStart.value = await isEnabled()
    }
    const localFlg = localStorage.getItem('SHOW_ABOUT_FLG') || ''
    if(localFlg < SHOW_ABOUT_FLG) showAbout.value = true
    localStorage.setItem('SHOW_ABOUT_FLG', SHOW_ABOUT_FLG)
})
onBeforeUnmount(() => {
    clearInterval(autoCheckInterval)
})
</script>

<style lang="scss" scoped>
.outer1{
    width: 100%;
    .container{
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        user-select: none;
        .title{
            font-size: 24px;
            font-weight: 700;
        }
        .settings{
            display: flex;
            flex-direction: column;
            width: 100%;
            .sub-title{
                font-size: 18px;
                font-weight: 700;
                margin: 10px 0 5px;
            }
            .group{
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: flex-start;
                row-gap: 4px;
            }
            .switch-group{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                row-gap: 4px;
                column-gap: 15px;
            }
            .switch{
                display: flex;
                align-items: center;
                column-gap: 5px;
            }
            .switch-full {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
            }
            .el-switch{
                height: 24px;
            }
            .lat-lng{
                width: 120px;
            }
            span{
                display: flex;
                align-items: center;
            }
        }
    }
}
ul {
    list-style-position: inside;
}
.w-full{
    width: 100%;
}
.el-checkbox{
    height: 24px;
    margin: 0px;
}
.int {
    width: 22px;
    height: 22px;
    margin-left: 6px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    user-select: none;
    .csis {
        font-size: 16px;
    }
    .shindo {
        font-size: 11px;
        letter-spacing: -1px;
        padding-right: 1px;
    }
    .shindo::first-letter {
        font-size: 16px;
        vertical-align: top;
    }
    .roman.scale-9 {
        transform: scaleX(0.9);
    }
}
.mag {
    width: 28px;
    height: 22px;
    margin-left: 6px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    user-select: none;
}
.el-slider {
    flex: 1;
    margin: 0 1rem;
}
.justify-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex {
    display: flex;
    align-items: center;
}
.ml-4 {
    margin-left: 1rem;
}
.mr-4 {
    margin-right: 1rem;
}
.pl-4 {
    padding-left: 1rem;
}
.pl-8 {
    padding-left: 2rem;
}
.pr-4 {
    padding-right: 1rem;
}
.gap-2 {
    gap: 0.5rem;
}
.font-bold {
    font-weight: 700;
}
.text-right {
    text-align: right;
    :deep(.el-input__inner) {
        text-align: right;
    }
}
.font-red {
    color: red;
}
</style>

<style lang="scss">
.about-box {
    padding: 20px;
    .header {
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
    }
    .title{
        font-size: 20px;
        font-weight: 700;
    }
    .about {
        font-size: 16px;
    }
    .about+.about{
        margin-top: 10px;
    }
    a,a:visited{
        color: blue;
    }
}
.customize-audio {
    display: flex;
    flex-direction: column;
    align-items: center;
    .explanation,.test {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .text {
            font-size: 16px;
        }
        .buttons {
            width: 100%;
            display: flex;
            column-gap: 20px;
            row-gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
            .el-button {
                width: 150px;
                margin: 0;
            }
        }
    }
    .test {
        margin-top: 20px;
    }
}
</style>
