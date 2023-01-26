import { InjectionToken } from "@angular/core";
import { GeneratorService } from "./generator.service";

export const GeneratorFactory = (genService: GeneratorService) => (n: number): string => {
    return genService.generate(n);
};

export const generatedString = new InjectionToken<string>('GenerateString');

export const generatedStringProvider =
{
    provide: generatedString,
    useFactory: GeneratorFactory,
    deps: [GeneratorService]
};
