<script lang="ts" setup>

const selectedLang = ref({ name: '簡体字 → 日本語', dictName: 'csNotInJa' })
const langs = [
  { name: '簡体字 → 日本語', dictName: 'csNotInJa' },
  { name: '日本語 → 簡体字', dictName: 'jaNotInCs' },
  { name: '繁体字 → 日本語', dictName: 'ctNotInJa' },
  { name: '日本語 → 繁体字', dictName: 'jaNotInCt' },
  { name: '簡体字 → 繁体字', dictName: 'csNotInCt' },
  { name: '繁体字 → 簡体字', dictName: 'ctNotInCs' },
]

const isCheckKana = ref(true)
const isCheckBushu = ref(false)
const toCheck = ref('')

const message = ref<string[]>([])
const kanjiMatches = ref<RegExpMatchArray | null>(null)
const kanaMatches = ref<RegExpMatchArray | null>(null)
const bushuMatches = ref<RegExpMatchArray | null>(null)
const dict = useDict()

const startCheck = () => {
  resetCheck()
  if (toCheck.value === '') {
    message.value.push('テキストが空欄です')
    return
  }
  checkKanji()
  checkKana()
  checkBushu()

  if (kanjiMatches === null && kanaMatches === null && bushuMatches === null) {
    return
  }
  else {
    setColor()
  }
}

const checkKanji = () => {
  let rx: RegExp | undefined
  switch (selectedLang.value.dictName) {
    case 'csNotInJa':
      rx = dict.value.csNotInJa
      break;

    case 'jaNotInCs':
      rx = dict.value.jaNotInCs
      break;

    case 'ctNotInJa':
      rx = dict.value.ctNotInJa
      break

    case 'jaNotInCt':
      rx = dict.value.jaNotInCs
      break

    case 'csNotInCt':
      rx = dict.value.csNotInCt
      break

    case 'ctNotInCs':
      rx = dict.value.ctNotInCs
      break

    default:
      break;
  }
  if (rx === undefined) {
    return
  }
  kanjiMatches.value = toCheck.value.match(rx)
  if (kanjiMatches.value !== null) {
    message.value.push(`以下の漢字が見つかりました。計 ${kanjiMatches.value.length} 点です`)
  }
  else {
    message.value.push('疑わしい漢字は見つかりませんでした')
  }
}

const resetCheck = () => {
  colored.value = ''
  message.value.length = 0
  kanjiMatches.value = null
  kanaMatches.value = null
  bushuMatches.value = null
}

const checkKana = () => {
  if (isCheckKana.value) {
    if (selectedLang.value.dictName.endsWith('Ja')) {
      message.value.push('対象テキストが日本語のため、かな検出はスキップされました')
    }
    else {
      kanaMatches.value = toCheck.value.match(dict.value.kana)
      if (kanaMatches.value !== null) {
        message.value.push(`以下のひらがな・カタカナが見つかりました。計 ${kanaMatches.value.length} 点です`)
      }
    }
  }
}

const checkBushu = () => {
  if (isCheckBushu.value) {
    bushuMatches.value = toCheck.value.match(dict.value.kokiBushu)
    if (bushuMatches.value !== null) {
      message.value.push(`康煕部首漢字が見つかりました。計 ${bushuMatches.value.length} 点です`)
    }
    else {
      message.value.push('康煕部首漢字は含まれていませんでした')
    }
  }
}

const colored = ref('')
const setColor = () => {
  let tempText = toCheck.value
  tempText = subsetColor(tempText, kanjiMatches.value)
  tempText = subsetColor(tempText, kanaMatches.value)
  tempText = subsetColor(tempText, bushuMatches.value)
  colored.value = tempText
}

const subsetColor = (text: string, matches: RegExpMatchArray | null): string => {
  if (matches === null) {
    return text
  }
  let tempText = text
  const checked: string[] = ['']
  for (const m of matches) {
      if (checked.includes(m)) {
        continue
      }
      else {
        tempText = tempText.replaceAll(m, `<span class="hit">${m}</span>`)
        checked.push(m)
      }
    }
  return tempText
}

</script>

<template>
  <div class="container">
    <h2 class="text-center">日本語・中国語翻訳用 漢字チェッカー</h2>
    <div class="grid">
      <div class="col-5 align-items-center justify-content-center">
        <h3>翻訳の言語種別</h3>
        <Listbox v-model="selectedLang" :options="langs" optionLabel="name" class="w-full md:w-14rem" />
      </div>
      <div class="col-2">
        <Divider layout="vertical" />
      </div>
      <div class="col-5 align-items-center justify-content-center">
        <h3>その他の設定</h3>
        <div class="flex">
          <label>ひらがな・カタカナ</label>
          <InputSwitch v-model="isCheckKana" />
        </div>
        <div class="flex">
          <label>康熙部首</label>
          <InputSwitch v-model="isCheckBushu" />
        </div>
      </div>
    </div>
    <Divider />
    <div class="grid">
      <div class="col-12">
        <h3>テキスト入力</h3>
        <Textarea v-model="toCheck" autoResize id="toCheck" />
        <Button @click="startCheck">チェック</Button>
        <p v-for="text in message">{{ text }}</p>
      </div>
    </div>
    <div class="grid">
      <div class="col-12">
        <p v-html="colored" />
      </div>
    </div>
    <div>
      <p>漢字の詳細については<a href="https://xfitddzavf.larksuite.com/base/QXzNbimgjaHhELsOpkeu7jsKsUe?table=tblMW8jCj6gKJ2St&view=vewIZJdIsY" target="_blank">こちら</a></p>
      <p>また、漢字の追加希望は<a href="https://xfitddzavf.larksuite.com/base/QXzNbimgjaHhELsOpkeu7jsKsUe?table=tbl0c0cmHcMgjcxh&view=vewFff8PKA" target="_blank">こちら</a>から</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 700px;
  margin: auto;
}

#toCheck {
  width: 100%;
}

:deep(span.hit) {
  color: red;
}
</style>