namespace $ {

	export type $bun_type_nullable< T > = {
		[ Key in keyof T ]: T[ Key ] | null
	}

}
