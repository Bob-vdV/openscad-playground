// Portions of this file are Copyright 2021 Google LLC, and licensed under GPL2+. See COPYING.

import { Symlinks } from "./filesystem";
import libs_config from "../../libs-config.json"

export type ZipArchives = {
  [name: string]: {
    deployed?: boolean,
    description?: string,
    gitOrigin?: {
      repoUrl: string,
      branch: string,
    }
    symlinks?: Symlinks,
    docs?: { [name: string]: string }
  }
};

export const zipArchives: ZipArchives = Object.fromEntries(libs_config.libraries.map((v) => {
  return [v.name,
  {
    gitOrigin: {
      repoUrl: v.repo,
      branch: v.branch
    }
  }
  ];
}))

export const deployedArchiveNames =
  Object.entries(zipArchives)
    .filter(([k, { deployed }]) => {
      return (deployed == null || deployed)
    })
    .map(([n]) => n);
