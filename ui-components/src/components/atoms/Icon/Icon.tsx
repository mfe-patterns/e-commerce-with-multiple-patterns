import React from 'react';

export enum IconType {
  trash = "trash",
  cart = "cart",
}

interface IconProps {
  type: IconType;
  height?: number;
  width?: number;
}

export const Icon: React.FC<IconProps> = ({ type, height = 20, width = 20 }: IconProps) => {
  return (
    <img src={`../../../assets/icons/${type}.png`} height={height} width={width} />
  );
};