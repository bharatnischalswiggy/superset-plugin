/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { useCallback, useMemo } from 'react';
import { checkIsMetricStacked, processBarChartOrder } from './utils';
import { ResultData, SortingType, Z_SEPARATOR } from '../plugin/utils';

export const useCurrentData = (
  data: ResultData[],
  disabledDataKeys: string[],
  hasOrderedBars: boolean,
  breakdowns: string[],
  orderByYColumn: SortingType,
  showTotals: boolean,
  yColumns: string[],
  excludedMetricsForStackedBars: string[],
  includedMetricsForStackedBars: string[],
  isMainChartStacked: boolean,
): ResultData[] => {
  let currentData = useMemo(
    () =>
      data.map(item => {
        const newItem = { ...item };
        disabledDataKeys.forEach(dataKey => delete newItem[dataKey]);
        return newItem;
      }),
    [data, disabledDataKeys],
  );

  currentData = useMemo(
    () =>
      processBarChartOrder(
        hasOrderedBars,
        breakdowns,
        yColumns,
        currentData,
        orderByYColumn,
        excludedMetricsForStackedBars,
        includedMetricsForStackedBars,
        isMainChartStacked,
      ),
    [
      hasOrderedBars,
      breakdowns,
      yColumns,
      currentData,
      orderByYColumn,
      excludedMetricsForStackedBars,
      includedMetricsForStackedBars,
      isMainChartStacked,
    ],
  );

  currentData = useMemo(
    () =>
      currentData.map(item => ({
        ...item,
        rechartsTotal: showTotals
          ? breakdowns.reduce(
              (total, breakdown) =>
                total +
                (checkIsMetricStacked(
                  isMainChartStacked,
                  breakdown,
                  excludedMetricsForStackedBars,
                  includedMetricsForStackedBars,
                )
                  ? (item[breakdown] as number) ?? 0
                  : 0),
              0,
            )
          : undefined,
      })),
    [
      breakdowns,
      currentData,
      excludedMetricsForStackedBars,
      includedMetricsForStackedBars,
      isMainChartStacked,
      showTotals,
    ],
  );

  return currentData;
};
export const useZAxisRange = (currentData: ResultData[], bubbleSize = 1000) =>
  useCallback<(arg: string) => number[]>(
    breakdown => {
      const axisValues = [
        ...currentData.map(item => item[`${breakdown}${Z_SEPARATOR}`]).filter(item => item !== undefined),
      ] as number[];
      const min = Math.min(...axisValues);
      const max = Math.max(...axisValues);

      const allAxisValues = [
        ...currentData
          .map(item =>
            Object.keys(item)
              .map(z => (z.startsWith(Z_SEPARATOR) ? item[z] : undefined))
              .filter(u => u !== undefined),
          )
          .flat(),
      ] as number[];
      const allMax = Math.max(...allAxisValues);

      const delta = bubbleSize / allMax;

      return [min * delta, max * delta];
    },
    [bubbleSize, currentData],
  );
