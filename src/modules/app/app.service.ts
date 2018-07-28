import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { PackageJson } from './app.interfaces';

@Injectable()
export class AppService {
  private packageJson: PackageJson;

  constructor() {
    this.packageJson = this.getPackageJson();
  }

  public info() {
    return {
      api_version: '1.0',
      package_version: this.packageJson.version,
      app_name: this.packageJson.name,
      app_description: this.packageJson.description,
      app_auther: this.packageJson.author,
    };
  }

  private getPackageJson() {
    const filepath = path.join(process.cwd(), 'package.json');
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  }
}
