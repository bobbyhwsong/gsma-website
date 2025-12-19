# GSMA (Vite + React + TS + Tailwind)

## 재현성(같은 상태로 설치) 핵심

- **`package-lock.json`을 반드시 Git에 같이 올리기**
  - `npm audit fix` 같은 걸로 의존성이 바뀌면 보통 `package-lock.json`도 같이 바뀝니다.
  - 다른 곳에서 “똑같이” 설치되게 하려면 **`package-lock.json`이 최신이어야** 합니다.
- 설치는 **`npm ci`** 사용
  - `package-lock.json`에 적힌 버전 그대로 설치합니다.

## conda 환경(권장)

이 레포에는 `environment.yml`이 포함되어 있습니다.

```bash
cd GSMA
conda env create -f environment.yml
conda activate gsma
```

## 로컬 실행

```bash
cd GSMA
npm ci
npm run dev
```

## 빌드/프리뷰

```bash
npm run build
npm run preview
```

## Node 버전

- **nvm 사용 시**: `.nvmrc`가 `lts/*`로 설정되어 있어, `nvm use` 시 **최신 LTS**를 사용하게 됩니다.
- **conda 사용 시**: `environment.yml`은 “최신 LTS 자동”이 어려워 **현재 LTS 메이저(예: 22)**로 고정돼 있습니다.
- `package.json`의 `engines.node`는 **최소 요구 버전**(현재 `>=20`)으로 설정되어 있습니다.

