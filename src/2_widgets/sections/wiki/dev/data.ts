import IconGloves from '@shared/ui/icons/IconGloves.vue'
import IconBooks from '@shared/ui/icons/IconBooks.vue'
import IconHands from '@shared/ui/icons/IconHands.vue'
import IconLoupe from '@shared/ui/icons/IconLoupe.vue'
import type { CardInfo } from "@app/types/types";
import type { Component } from 'vue';

export const wikiListInfo: Omit<CardInfo & { 'icon': Component }, 'imgUrl'>[] = [
  { title: 'КНИГИ и ЛИТЕРАТУРА', router: 'a', icon: IconBooks },
  { title: 'ТЕОРИЯ и МЕТОДИКА', router: 'b', icon: IconGloves },
  { title: 'ПОИСК СЕКЦИЙ', router: 'c', icon: IconLoupe },
  { title: 'ПАРТНЕРЫ КЛУБА', router: 'd', icon: IconHands },
]
