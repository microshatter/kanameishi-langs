<template>
  <div class="outer1">
    <div class="container">
      <div class="bar" @click="smoothScrollToTop">
        <div class="title">{{ t('eqlist.title') }}</div>
        <div class="switch">
          <el-select
            style="width: 90px;"
            v-model="settingsStore.mainSettings.historyMagThres"
            size="small"
            @click.stop
          >
            <el-option :label="t('filter.allMagnitudes')" :value="0" />
            <el-option :label="t('filter.above2')" :value="2.0" />
            <el-option :label="t('filter.above2p5')" :value="2.5" />
            <el-option :label="t('filter.above3')" :value="3.0" />
            <el-option :label="t('filter.above3p5')" :value="3.5" />
            <el-option :label="t('filter.above4')" :value="4.0" />
            <el-option :label="t('filter.above4p5')" :value="4.5" />
            <el-option :label="t('filter.above5')" :value="5.0" />
            <el-option :label="t('filter.above5p5')" :value="5.5" />
            <el-option :label="t('filter.above6')" :value="6.0" />
            <el-option :label="t('filter.above6p5')" :value="6.5" />
            <el-option :label="t('filter.above7')" :value="7.0" />
            <el-option :label="t('filter.above7p5')" :value="7.5" />
            <el-option :label="t('filter.above8')" :value="8.0" />
          </el-select>
          <el-select
            style="width: 90px;"
            v-model="settingsStore.mainSettings.historySources"
            size="small"
            multiple
            placeholder=""
            @click.stop
          >
            <template #tag>
              <span class="el-select__placeholder custom-tag">
                {{ settingsStore.mainSettings.historySources.length }}{{ t('eqlist.sources') }}
              </span>
            </template>
            <el-option label="CENC" value="CENC" :disabled="!statusStore.enabledSource.includes('cencEqlist')" />
            <el-option label="CWA" value="CWA" :disabled="!statusStore.enabledSource.includes('cwaEqlist')" />
            <el-option label="JMA" value="JMA" :disabled="!statusStore.enabledSource.includes('jmaEqlist')" />
            <el-option label="USGS" value="USGS" :disabled="!statusStore.enabledSource.includes('usgsEqlist')" />
            <el-option label="FSSN" value="FSSN" :disabled="!statusStore.enabledSource.includes('fssnEqlist')" />
          </el-select>
        </div>
      </div>
      <div class="content" ref="content">
        <div class="wrap">
          <NmefcTsunami v-if="settingsStore.mainSettings.source.nmefcTsunami" v-show="statusStore.isActive.nmefcTsunami" />
          <JmaTsunami v-if="settingsStore.mainSettings.source.jmaTsunami" v-show="statusStore.isActive.jmaTsunami" />
          <EqlistHistoryComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' })
import NmefcTsunami from './components/NmefcTsunami.vue';
import JmaTsunami from './components/JmaTsunami.vue';
import { useSettingsStore } from '@/stores/settings';
import { useStatusStore } from '@/stores/status';
import EqlistHistoryComponent from './components/EqlistHistory.vue';
import { ref, watch, inject } from 'vue';

const settingsStore = useSettingsStore()
const statusStore = useStatusStore()

const content = ref(null)
const menuId = inject('menuId')
const scrollToTop = () => content.value.scrollTop = 0
const smoothScrollToTop = () => {
  content.value.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
watch(() => menuId.value == 'eqlists', scrollToTop)

</script>

<style lang="scss" scoped>
.outer1 {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    padding: 5px;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    user-select: none;
    .bar {
      width: 100%;
      height: 28px;
      display: flex;
      align-items: center;
      .title {
        font-size: 24px;
        font-weight: 700;
      }
      .switch {
        width: 200px;
        margin-left: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :deep(.custom-tag) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        :deep(.el-select__input) {
          cursor: pointer;
        }
      }
    }
    .content {
      width: 100%;
      height: 100%;
      overflow: auto;
      .wrap {
        padding-right: calc(100% - 390px);
      }
    }
  }
}
</style>