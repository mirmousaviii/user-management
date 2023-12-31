'use client';

import React from 'react';
import createCache, {Options} from '@emotion/cache';
import {useServerInsertedHTML} from 'next/navigation';
import {CacheProvider} from '@emotion/react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ColorModeProvider} from "@/context/color-mode";
import {darkTheme, lightTheme} from "@/theme/theme";
import {ScopedCssBaseline} from "@mui/material";

export default function ThemeRegistry({children, options}: { children: React.ReactNode, options:  Options }) {

    const [{cache, flush}] = React.useState(() => {
        const cache = createCache(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted: string[] = [];
        cache.insert = (...args) => {
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return {cache, flush};
    });

    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = '';
        for (const name of names) {
            styles += cache.inserted[name];
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: options.prepend ? `@layer emotion {${styles}}` : styles,
                }}
            />
        );
    });

    return (
        <CacheProvider value={cache}>
            <ColorModeProvider render={(mode) => (
                <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
                    <CssBaseline />
                    <ScopedCssBaseline enableColorScheme>
                        {children}
                    </ScopedCssBaseline>
                </ThemeProvider>
            )}>
            </ColorModeProvider>
        </CacheProvider>
    );
}
