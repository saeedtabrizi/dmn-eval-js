/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
declare module "@hbtgmbh/dmn-eval-js" {
	export interface Decision {
        /** */
    }

    export type DecisionContext= undefined| Record<string,any>;

    export type DecisionResult = undefined| any[] | Record<string,any>;
	export class decisionTable {
		static parseDmnXml(xmlContent: string): Promise<Decision[]>;
		static evaluateDecision<C extends DecisionContext = DecisionContext, R extends DecisionResult = DecisionResult >(
			name: string,
			decision: Decision[],
			context: C
		): R;
	}

	export interface dateTime {}
}
