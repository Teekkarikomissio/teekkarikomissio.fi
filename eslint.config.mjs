import { fileURLToPath } from 'url';
import path from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import ts from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/',
      '.next/**/*',
      'out/**/*',
      'public/**/*',
      'next-env.d.ts',
    ],
  },
  ...ts.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  // ...compat.extends('plugin:tailwindcss/recommended'),
  eslintConfigPrettier,
];

export default eslintConfig;
