import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		include: ['**/*.spec.js'],
		reporters: ['html'],
		outputFile: 'test-report/index.html'
	}
});
