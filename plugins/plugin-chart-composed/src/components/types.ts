import { JsonObject } from '@superset-ui/core';

export type BarChartValue = { id: string; value: number; name: string; color: string };
export type BarChartValueMap = { [key: string]: BarChartValue };

export enum Layout {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export enum LegendPosition {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}

export type LegendAlign = 'left' | 'center' | 'right';
export type LegendVerticalAlign = 'top' | 'middle' | 'bottom';

export const MIN_BAR_SIZE_FOR_LABEL = 18;
export const MIN_SYMBOL_WIDTH_FOR_LABEL = 14;

export const NORM_SIZE = 40;
export const NORM_SPACE = NORM_SIZE;

export const CHART_TYPES = {
  BAR_CHART: 'BAR_CHART',
  LINE_CHART: 'LINE_CHART',
  SCATTER_CHART: 'SCATTER_CHART',
  AREA_CHART: 'AREA_CHART',
  BUBBLE_CHART: 'BUBBLE_CHART',
  NORM_CHART: 'NORM_CHART',
};

export enum STICK_TYPES {
  START = 'START',
  CENTER = 'CENTER',
  END = 'END',
}

export const CHART_SUB_TYPES = {
  CIRCLE: 'circle',
  DIAMOND: 'diamond',
  SQUARE: 'square',
  WYE: 'wye',
  ARROW_UP: 'arrowUp',
  ARROW_DOWN: 'arrowDown',

  BASIS: 'basis',
  LINEAR: 'linear',
  NATURAL: 'natural',
  MONOTONE: 'monotone',
  STEP: 'step',

  DEFAULT: 'default',
  STACKED: 'stacked',
};

export const CHART_TYPE_NAMES = {
  [CHART_TYPES.BAR_CHART]: 'Bar',
  [CHART_TYPES.LINE_CHART]: 'Line',
  [CHART_TYPES.AREA_CHART]: 'Area',
  [CHART_TYPES.SCATTER_CHART]: 'Scatter',
  [CHART_TYPES.BUBBLE_CHART]: 'Bubble',
  [CHART_TYPES.NORM_CHART]: 'Norm',
};

export const CHART_SUB_TYPE_NAMES = {
  [CHART_TYPES.BAR_CHART]: {
    [CHART_SUB_TYPES.DEFAULT]: 'Default Bar Chart',
    [CHART_SUB_TYPES.STACKED]: 'Stacked Bar Chart',
  },
  [CHART_TYPES.NORM_CHART]: {
    [CHART_SUB_TYPES.DEFAULT]: 'Default Norm Chart',
  },
  [CHART_TYPES.SCATTER_CHART]: {
    [CHART_SUB_TYPES.CIRCLE]: 'Circle Scatter Chart',
    [CHART_SUB_TYPES.DIAMOND]: 'Diamond Scatter Chart',
    [CHART_SUB_TYPES.SQUARE]: 'Square Scatter Chart',
    [CHART_SUB_TYPES.WYE]: 'Wye Scatter Chart',
    [CHART_SUB_TYPES.ARROW_UP]: 'Arrow Up Scatter Chart',
    [CHART_SUB_TYPES.ARROW_DOWN]: 'Arrow Down Scatter Chart',
  },
  [CHART_TYPES.BUBBLE_CHART]: {
    [CHART_SUB_TYPES.CIRCLE]: 'Circle Bubble Chart',
    [CHART_SUB_TYPES.DIAMOND]: 'Diamond Bubble Chart',
    [CHART_SUB_TYPES.SQUARE]: 'Square Bubble Chart',
    [CHART_SUB_TYPES.WYE]: 'Wye Bubble Chart',
    [CHART_SUB_TYPES.ARROW_UP]: 'Arrow Up Bubble Chart',
    [CHART_SUB_TYPES.ARROW_DOWN]: 'Arrow Down Bubble Chart',
  },
  [CHART_TYPES.LINE_CHART]: {
    [CHART_SUB_TYPES.BASIS]: 'Basis Line Chart',
    [CHART_SUB_TYPES.LINEAR]: 'Linear Line Chart',
    [CHART_SUB_TYPES.NATURAL]: 'Natural Line Chart',
    [CHART_SUB_TYPES.MONOTONE]: 'Monotone Line Chart',
    [CHART_SUB_TYPES.STEP]: 'Step Line Chart',
  },
  [CHART_TYPES.AREA_CHART]: {
    [CHART_SUB_TYPES.BASIS]: 'Basis Area Chart',
    [CHART_SUB_TYPES.LINEAR]: 'Linear Area Chart',
    [CHART_SUB_TYPES.NATURAL]: 'Natural Area Chart',
    [CHART_SUB_TYPES.MONOTONE]: 'Monotone Area Chart',
    [CHART_SUB_TYPES.STEP]: 'Step Area Chart',
  },
};

export type ColorSchemeByItem = JsonObject;
export type ColorSchemeBy = {
  __DEFAULT_COLOR_SCHEME__: string;
  metric: ColorSchemeByItem;
  breakdown: ColorSchemeByItem;
};
