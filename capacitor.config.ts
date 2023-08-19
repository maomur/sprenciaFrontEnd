import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'us.liveroad.sprenciaproject',
  appName: 'Sprencia',
  webDir: 'dist/sprencia-front-end',
  server: {
    androidScheme: 'https'
  }
};

export default config;
